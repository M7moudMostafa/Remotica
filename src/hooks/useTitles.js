import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useTitles = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["Titles", "Movies"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles", {
            types: "MOVIE",
          }),
      },
    ],
  });

  return results;
};

export default useTitles;
