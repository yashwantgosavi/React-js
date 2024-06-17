import React from 'react';
import './App.css';
import Nav from './Nav';


class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Avengers',
            desc: 'lorem Ipsum is dummy text',
            imgSrc: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg',
            button: 'Add to Cart'
        }
    }


    render() {
        const { title, desc, imgSrc, button } = this.state;
        return (
            <>
                <Nav />
                <div className='card'>
                    <div className='row'>
                        <img src={imgSrc} alt='' />
                        <h4>{title}</h4>
                        <p>{desc}</p>
                        <button>{button}</button>
                    </div>
                    <footer>
                        <div className='a'>
                                <div>-</div>
                                <div>Rating : 5</div>
                                <div>+</div>
                        </div>
                    </footer>
                </div>
            </>
        )
    }

}


export default MovieCard;