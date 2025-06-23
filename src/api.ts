import axios from 'axios';
const server = 'https://14.design.htmlacademy.pro/six-cities'
export  function configureAxios() {
    return axios.create({baseURL: server, timeout:5000})
}