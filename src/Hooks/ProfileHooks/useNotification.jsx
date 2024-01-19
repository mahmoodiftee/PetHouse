import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useNotification = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: notification = [], status } = useQuery({
        queryKey: ['notification'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/adopted')
            const filteredData = res.data.filter(data => data.authorEmail === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [notification, refetch, isLoading]
};

export default useNotification;