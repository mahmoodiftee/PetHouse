import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})
const useAxios = () => {
    return axiosSecure;
}

export default useAxios;
// http://localhost:5000/
//https://per-house-server.vercel.app
