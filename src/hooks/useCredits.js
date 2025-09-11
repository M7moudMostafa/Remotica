import { useQuery } from "@tanstack/react-query"
import { getCreditsByTitleId } from "../api/endpoints/mediaTitlesApi"

const useCreditsByTitleId = (id) => {
  return useQuery({
    queryKey: ["Credits", id],
    queryFn: () => getCreditsByTitleId(id),
    enabled: !!id,
    staleTime: Infinity,
    gcTime: Infinity
  })
}

export default useCreditsByTitleId