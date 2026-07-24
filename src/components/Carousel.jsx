import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const Carousel = ({ title, movies, direction = "left" }) => {
  const navigate = useNavigate();

  // Duplicate the list to make an infinite scrolling loop
  const carouselList = [...movies, ...movies];

  // When user clicks a carousel item, go to that movie's page
  const goToMoviePage = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      <div className="carousel-viewport">
        {/* The scrolling track — direction determines left or right scroll */}
        <div className={`carousel-track scroll-${direction}`}>

          {carouselList.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              className="carousel-item"
              onClick={() => goToMoviePage(movie.id)}
              tabIndex={0}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="carousel-item-img"
                loading="lazy"
              />

              {/* Title and rating shown on hover */}
              <div className="carousel-item-overlay">
                <h4 className="overlay-title">{movie.title}</h4>
                <p className="overlay-meta">
                  <span>{movie.genre}</span>
                  <span className="overlay-dot">•</span>
                  <span className="overlay-rating">★ {movie.rating}</span>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Carousel;
