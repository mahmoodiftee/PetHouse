import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useAdoptions = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: adoption = [], status } = useQuery({
        queryKey: ['adoption'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/avaiable-pets')
            const filteredData = res.data.filter(data => data.BookmarkerEmail === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [bookmark, refetch, isLoading]
};

export default useAdoptions;