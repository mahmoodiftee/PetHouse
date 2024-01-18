import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useAdopted = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: adopted = [], status } = useQuery({
        queryKey: ['adopted'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/adoptions')
            const filteredData = res.data.filter(data => data.adopterEmail === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [adopted, refetch, isLoading]
};

export default useAdopted;