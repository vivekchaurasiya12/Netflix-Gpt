import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { options, IMAGE_CDN_URL } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa"; // Import back arrow icon from react-icons

const MovieDetails = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          options
        );
        const data = await response.json();
        console.log(data); // Log the full movie details
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div
      className="bg-black min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${IMAGE_CDN_URL}${movieDetails.backdrop_path || movieDetails.poster_path})`,
      }}
    >
      {/* Overlay to darken the background */}
      <div className="bg-black bg-opacity-70 min-h-screen">
        {/* Back Button */}
        <div className="p-4">
          <button
            className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md shadow-md"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="text-lg" /> Back
          </button>
        </div>

        <div className="p-4 sm:p-8 text-white flex flex-col lg:flex-row lg:items-start lg:gap-8">
        
          <div className="flex justify-center lg:justify-start lg:w-1/3">
            <img
              src={`${IMAGE_CDN_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-48 sm:w-64 lg:w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-6 lg:mt-0 lg:w-2/3">
         
            <h1 className="text-2xl sm:text-4xl font-bold">{movieDetails.original_title}</h1>

         
            {movieDetails.tagline && (
              <p className="italic text-lg sm:text-xl mt-2 text-gray-300">{movieDetails.tagline}</p>
            )}

           
            <p className="mt-4 text-sm sm:text-base">{movieDetails.overview}</p>

           
            <p className="mt-6 text-sm sm:text-base">
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>

         
            <p className="text-sm sm:text-base">
              <strong>Runtime:</strong> {movieDetails.runtime} minutes
            </p>

           
            {movieDetails.genres && movieDetails.genres.length > 0 && (
              <p className="mt-4 text-sm sm:text-base">
                <strong>Genres:</strong>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}

           
            {movieDetails.spoken_languages && movieDetails.spoken_languages.length > 0 && (
              <p className="text-sm sm:text-base">
                <strong>Languages:</strong>{" "}
                {movieDetails.spoken_languages.map((lang) => lang.english_name).join(", ")}
              </p>
            )}

           
            <p className="text-sm sm:text-base">
              <strong>Popularity:</strong> {movieDetails.popularity}
            </p>

           
            <p className="text-sm sm:text-base">
              <strong>Rating:</strong> {movieDetails.vote_average} / 10 ({movieDetails.vote_count} votes)
            </p>

          
            {movieDetails.homepage && (
              <p className="mt-4 text-sm sm:text-base">
                <strong>Homepage:</strong>{" "}
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Visit
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;