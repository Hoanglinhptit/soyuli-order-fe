import { ApiClient } from './APIConfig';

 const loginRequest = (payload:Record<string, any>) => ApiClient.post('/login', payload);




 export default loginRequest
 