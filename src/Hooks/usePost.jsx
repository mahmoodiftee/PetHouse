import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePost = () => {
    const usePost = useAxios();
    const {refetch, data: post = [], status} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await usePost.get('/blogs')
            return res.data;
        }
    })
    const isLoading = status === 'loading';

    return [post, refetch, isLoading]
};

export default usePost;