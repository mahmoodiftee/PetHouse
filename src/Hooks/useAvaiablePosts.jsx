import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAvaiablePosts = () => {
    const usePostHook = useAxios();
    const { refetch, data: post = [], status } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await usePostHook.get('/avaiable-pets')
            const fetchedData = [...res.data].reverse();
            return fetchedData;
        }
    })
    const isLoading = status === 'pending';

    return [post, refetch, isLoading]
};

export default useAvaiablePosts;