import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  // When user clicks a card, go to that movie's detail page
  const openMoviePage = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={openMoviePage} id={`movie-card-${movie.id}`}>

      {/* Poster image section */}
      <div className="poster-container">
        <img
          src={movie.poster}
          alt={movie.title}
          className="poster-img"
          loading="lazy"
        />

        {/* Star rating shown on top-left of poster */}
        <div className="rating-badge">
          <span className="star-icon">★</span>
          <span className="rating-value">{movie.rating}</span>
        </div>

        {/* Play button that appears on hover */}
        <div className="play-overlay">
          <div className="play-icon-circle">
            <span className="play-arrow">▶</span>
          </div>
        </div>
      </div>

      {/* Movie title and details below poster */}
      <div className="card-info">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-meta">
          <span>{movie.genre}</span>
          <span className="meta-dot">•</span>
          <span>{movie.year}</span>
          <span className="meta-dot">•</span>
          <span>{movie.duration}</span>
        </p>
      </div>

    </div>
  );
};

export default MovieCard;
