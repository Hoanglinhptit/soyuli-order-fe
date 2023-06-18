import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import fs from 'fs';
import * as config from '../helper/config';

const createAxios = (): AxiosInstance => {
  const axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = config.api;
  axiosInstant.defaults.timeout = 20000;
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  axiosInstant.interceptors.request.use(
    async (axiosConfig) => {
      axiosConfig.headers.Authorization = `Bearer ${localStorage
        .getItem('token')
        ?.toString()}`;
      return axiosConfig;
    },
    (error: any): Promise<never> => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        // store.dispatch(logoutAction());
        localStorage.removeItem('token');
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );

  return axiosInstant;
};

export const axiosClient = createAxios();
const downloadXLSFile = async (url:string) => {
  // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
  const headers = { 'Content-Type': 'blob' };
  const config: AxiosRequestConfig = {
    method: 'GET',
    url,
    responseType: 'arraybuffer',
    headers,
  };

  try {
    const response = await axios(config);

    const outputFilename = `${Date.now()}.xls`;

    // If you want to download file automatically using link attribute.
    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', outputFilename);
    document.body.appendChild(link);
    link.click();

    // OR you can save/write file locally.
    // fs.writeFileSync(outputFilename, response.data);
  } catch (error) {
    console.error(error);
  }
};

// handle url
function handleUrl(url: string, query: Record<string, any>) {
  return queryString.stringifyUrl({ url, query });
}

export const ApiClient = {
  get: (url: string, payload: Record<string, any>) =>
    axiosClient.get(handleUrl(url, payload)),
  post: (url: string, payload: Record<string, any>) =>
    axiosClient.post(url, payload),
  put: (url: string, payload: Record<string, any>) =>
    axiosClient.put(url, payload),
  path: (url: string, payload: Record<string, any>) =>
    axiosClient.patch(handleUrl(url, payload)),
  delete: (url: string, payload: Record<string, any>) =>
    axiosClient.delete(handleUrl(url, payload)),
  downloadXLSFile
};
