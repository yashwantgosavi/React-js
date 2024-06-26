import React from "react";
import MovieCard from "./MovieCard";
import { logDOM } from "@testing-library/react";

class MovieList extends React.Component {

  render() {
    const { movies, addStars, handleDecStar } = this.props;
    console.log(this.props)
    return (
      <div className="main">
        {movies.map((movie, index) => (
          <MovieCard movies={movie}
            key={index}
            addStars={addStars}
            handleDecStar={handleDecStar}
          />
        ))}
      </div>
    )
  }
}

export default MovieList;