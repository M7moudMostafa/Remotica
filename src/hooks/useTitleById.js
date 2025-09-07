import { useQuery } from "@tanstack/react-query"
import { getTitleById } from "../api/endpoints/mediaTitlesApi"

const useTitleById = (id) => {
  return useQuery({
    queryKey: ["Title", id],
    queryFn: () => getTitleById(id),
    enabled: !!id,
    staleTime: Infinity,
    gcTime: Infinity
  })
}

export default useTitleById