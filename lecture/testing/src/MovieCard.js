import React from 'react';
import './App.css';
import Nav from './Nav';
import styled from 'styled-components';

const Cards = styled.div`
background-color:yellow;
`


class MovieCard extends React.Component {

    addStars = () => {
        if (this.state.star == 5) {
            return
        }
        this.setState({
            stars: this.state.star += 1
        })
    }
    descStars = () => {
        if (this.state.star == 0) {
            return
        }
        this.setState({
            stars: this.state.star -= 1
        })
    }
    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }
    render() {
        const { title, desc, imgSrc, button, stars, fav } = this.props.movies;
        return (
            <>
                <Nav />
                <Cards>
                    <div className='row'>
                        <img src={imgSrc} alt='' />
                        <h4>{title}</h4>
                        <p>{desc}</p>
                        <button>{button}</button>
                    </div>
                    <footer>
                        <div className='a'>
                            <div onClick={this.descStars.bind(this)}>-</div>
                            <div>Rating : {stars}</div>
                            <div onClick={this.addStars.bind(this)}>+</div>
                            {fav ? <button onClick={this.handleFav}>Favourite</button> : <button onClick={this.handleFav}>Un-Favourite</button>}
                        </div>
                    </footer>
                </Cards>
            </>
        )
    }

}


export default MovieCard;


