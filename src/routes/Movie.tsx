import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { MovieCard } from "../components/MovieCard";
import { ResetButton } from "../components/ResetButton";
import { Loading } from "../components/Loading";

export const Movie = () => {
  const [title, setTitle] = useState<string>("");
  const [isStart, setStart] = useState(false);
  const [searchActive, setSearchActive] = useState(true);
  const [response, setResponse] = useState("false")

  let movieAPI = import.meta.env.VITE_MOVIE_KEY

  const {
    data: movie, isFetching, isError } = useQuery(["searchMovie"],
      () =>
        axios
          .get(`https://www.omdbapi.com/?t=${title}&apiKey=` + movieAPI)
          .then((res) => {
            setSearchActive(false);
            setStart(false);
            setResponse(res.data.Response)
            return res.data;
          }),
      { enabled: isStart }
    );
  const searchMovie = () => {
    setStart(true);
  };

  const resetSearch = () => {
    setSearchActive(true);
    setTitle("");
  };

  return (
    <div className="movieContainer">
      {searchActive && !isFetching && (
        <>
          <div>Search movie you want to watch in English</div>
          <img className="movieposter" src="../film.png"></img>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button className="searchButton" onClick={searchMovie}>search</button>
        </>
      )}

      {
        isFetching ? (
          <Loading></Loading>
        ) :
          isError ? (
            <div>Error occurred while fetching data</div>
          ) : response == "True" && !searchActive ? (
            <>
              <MovieCard movie={movie}></MovieCard>
              <ResetButton onClick={resetSearch} />
            </>
          ) : response == "False" && !searchActive && (
            <>
              <div>
                Not Found
                <div>
                  <ResetButton onClick={resetSearch} />
                </div>
              </div>
            </>
          )
      }

    </div>
  );
};
