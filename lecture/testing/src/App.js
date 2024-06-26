import MovieList from "./MovieList";
import styled from "styled-components";
import colorModules from './color.module.css';
import { movies } from "./moviesData";
import React from "react";



const Heading = styled.div`
background-color:${(props) => props.color};
`
const H1 = styled.h1`
color:${(props) => props.color}
`
class App extends React.Component {
  constructor() {
    super();
    //Creating the state object 
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  handleIncStar = (movie) => {
    const { movies } = this.state
    const mid = movies.indexOf(movie);

    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 1;
    this.setState({
      movies: movies
    })
  }


  handleDecStar = (a) => {
    const { movies } = this.state
    const mid = movies.indexOf(a);

    movies[mid].star -= 1;

    if (movies[mid].star < 0) {
      return;
    }
    this.setState({
      movies
    })

  }



  render() {
    return (
      <>
        <Heading color="red"><H1 color="green" className={colorModules.h1}>Movie App</H1></Heading>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          handleDecStar={this.handleDecStar}
        />
      </>

    )
  }
}

export default App;