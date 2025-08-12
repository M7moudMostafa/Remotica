import { useQuery } from "@tanstack/react-query";
import { getAllTitle } from "../api/endpoints/mediaTitlesApi";

const useTitles = (type) => {
  return useQuery({
    queryKey: ["Titles", type],
    queryFn: () => getAllTitle({ types: type }),
    enabled: !!type,
    staleTime: Infinity,
    gcTime: Infinity
  });
};

export default useTitles;
