import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";

const TrailerSection = ({ title, description, id }) => {
  // State variable for trailer
  const [trailer, setTrailer] = useState(null);

  const getTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const trailerData = json?.results?.find(
        (video) => video.type === "Trailer"
      );
      setTrailer(trailerData);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    getTrailer();
  }, [id]);

  if (!trailer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="absolute -z-50 top-0 w-full">
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}?si=AdrLHXnYS6iW8pEf&autoplay=1&mute=1&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full aspect-video -mt-4"
        ></iframe>
      </div>
      <div className="text-white px-40 absolute top-0 py-64 bg-gradient-to-r from-black -z-10 flex justify-center flex-col">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <p className="w-1/2 line-clamp-4">{description}</p>
        <div className="flex gap-2 mt-4">
          <button className="p-2 bg-white text-black rounded-lg px-4 cursor-pointer">
            <span className="bi bi-play-circle-fill mr-2"></span>Play
          </button>
          <button className="p-2 bg-black/50 rounded-lg px-4 cursor-pointer">
            <span className="bi bi-info-circle-fill mr-2"></span>More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default TrailerSection;
