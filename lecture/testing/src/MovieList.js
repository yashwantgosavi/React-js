import React from "react"
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Avengers',
            desc: 'lorem Ipsum is dummy text',
            imgSrc: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg',
            button: 'Add to Cart',
            star: 0,
            fav: true
        }
    }

    render() {
        const { title, desc, imgSrc, button, star, fav } = this.state
        return (
            <>
                <MovieCard movies = {this.state}/>
            </>
        )
    }
}


export default MovieList;