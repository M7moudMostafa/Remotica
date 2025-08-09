import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useTitles = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["Titles", "Movies"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=MOVIE"),
      },
      {
        queryKey: ["Titles", "TV_SERIES"],
        queryFn: () => axios.get("https://api.imdbapi.dev/titles?types=TV_SERIES"),
      }
    ],
  });

  return {
    movies: results[0],
    series: results[1]
  }
};

export default useTitles;
