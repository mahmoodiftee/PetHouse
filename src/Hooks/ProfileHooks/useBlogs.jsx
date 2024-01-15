import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useBlogs = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: blog = [], status } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/blogs')
            const filteredData = res.data.filter(data => data.author_email === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [blog, refetch, isLoading]
};

export default useBlogs;