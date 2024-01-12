import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useBookmark = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const useBookmarkHook = useAxios();
    const { refetch, data: bookmark = [], status } = useQuery({
        queryKey: ['bookmark'],
        queryFn: async () => {
            const res = await useBookmarkHook.get('/bookmarks')
            const filteredData = res.data.filter(data => data.BookmarkerEmail === userEmail);
            return filteredData;
        }
    })
    const isLoading = status === 'pending';
    return [bookmark, refetch, isLoading]
};

export default useBookmark;