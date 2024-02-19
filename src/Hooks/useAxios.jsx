import axios from "axios";
// import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://per-house-server.vercel.app'
})
const useAxios = () => {
    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res;
    //     }, error => {
    //         console.log('axiossecure error', error.response)
    //         // if (error.response.status === 401 || error.response.status === 403) {
    //         //     console.log('logout the user')
    //         //     logout()
    //         //         .then(() => {
    //         //             navigate("/login")

    //         //         })
    //         //         .catch(error => console.log(error))
    //         // }
    //     })
    // }, [])
    return axiosSecure;
}

export default useAxios;
// http://localhost:5000/
//https://per-house-server.vercel.app
