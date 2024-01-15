import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxios from "../useAxios";

const useAdoptions = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: adoption = [], status } = useQuery({
        queryKey: ['adoption'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/avaiable-pets')
            const filteredData = res.data.filter(data => data.authorEmail === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [adoption, refetch, isLoading]
};

export default useAdoptions;