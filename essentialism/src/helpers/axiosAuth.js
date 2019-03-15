import axios from 'axios';

export const axiosWithAuth = axios.create({
  headers: {
    authorization: localStorage.getItem('token')
  }
})

// axios.interceptors.request.use(
//   function(options) {
//     options.headers.authorization = localStorage.getItem("token");
//     return options;
//   }
// )