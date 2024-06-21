import { Component } from "react";
import MovieCards from "./Cards";
class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    imgSrc: 'https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg',
                    title: 'Star Wars',
                    desc: 'This Star Wars Rogue One Poster is the perfect addition to your dwelling. Be it for your home office a media room a dorm room or family room. It will be the perfect addition to your home décor for years to come. This poster also makes for a great gift for friends, co-workers or family. This poster is a temporary promotion of an idea, product, or event put up in a public space for mass consumption. Typically, posters include both textual and graphic elements, although a poster may be either wholly graphical or wholly text. They are designed to be both eye-catching and informative, may be used for many purposes.',
                    ratingNum: 0,
                    subscribe: true
                },
                {
                    imgSrc: 'https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg',
                    title: 'Wanda Vision',
                    desc: 'WandaVision Movie Poster High Quality Glossy Print Photo Wall Art Elizabeth Olsen Disney Marvel Sizes',
                    ratingNum: 0,
                    subscribe: true
                },
                {
                    imgSrc: 'https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg',
                    title: 'Wanda Vision',
                    desc: 'WandaVision Movie Poster High Quality Glossy Print Photo Wall Art Elizabeth Olsen Disney Marvel Sizes',
                    ratingNum: 0,
                    subscribe: true
                },

            ]


        }
    }


    render() {
        const {movies} = this.state;
        return (
            <>
                {movies.map((movies, index)=>(<MovieCards testing={movies} key={index}/>))}
            </>
        )
    }

}

export default MovieList;