import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useTitles = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["Titles", "Movies"],
        queryFn: () => axios.get("https://api.imdbapi.dev/titles?types=MOVIE"),
      },
      {
        queryKey: ["Titles", "TV_SERIES"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=TV_SERIES"),
      },
      {
        queryKey: ["Titles", "TV_MINI_SERIES"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=TV_MINI_SERIES"),
      },
      {
        queryKey: ["Titles", "TV_SPECIAL"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=TV_SPECIAL"),
      },
      {
        queryKey: ["Titles", "TV_MOVIE"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=TV_MOVIE"),
      },
      {
        queryKey: ["Titles", "SHORT"],
        queryFn: () => axios.get("https://api.imdbapi.dev/titles?types=SHORT"),
      },
      {
        queryKey: ["Titles", "VIDEO"],
        queryFn: () => axios.get("https://api.imdbapi.dev/titles?types=VIDEO"),
      },
      {
        queryKey: ["Titles", "VIDEO_GAME"],
        queryFn: () =>
          axios.get("https://api.imdbapi.dev/titles?types=VIDEO_GAME"),
      },
    ],
  });

  return {
    movies: results[0],
    series: results[1],
    miniSeries: results[2],
    specials: results[3],
    tvMovies: results[4],
    shorts: results[5],
    videos: results[6],
    videoGames: results[7],
  };
};

export default useTitles;
