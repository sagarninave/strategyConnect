import axios from 'axios';

const baseApi = 'https://testapi.strategyconnect.co/api/';

const Axios = axios.create({
  baseURL: baseApi,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'test',
    namespace: 'WEB',
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Access-Control-Allow-Origin': '*',
    // crossorigin: 'true',
  },
});

export default Axios;
