import axios from "axios";

const baseUrl = 'http://localhost:8000/adrp/'
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        "Content-Type":"application/json",
        "Accept" : "application/json"
    }
})


export default AxiosInstance