import axios from "axios";


const api = axios.create({
    baseURL: "http://192.168.200.103:3000",

});

export default api;
