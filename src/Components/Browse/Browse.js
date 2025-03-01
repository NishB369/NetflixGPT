import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import TrailerSection from "../TrailerSection/TrailerSection";
import { useSelector } from "react-redux";

const Browse = () => {
  const movies = useSelector((store) => store.movies);
  const randomMovie = parseInt(Math.random() * 20);
  let data = null;
  movies.nowPlayingMovies !== null
    ? (data = movies?.nowPlayingMovies[randomMovie])
    : null;

  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      <TrailerSection
        title={data?.original_title}
        description={data?.overview}
        id={data?.id}
      />
    </div>
  );
};

export default Browse;
