import React from "react";
import '../dist/style.css'
import Styled from 'styled-components';
const SectionTag = Styled.section`
        background-color:red;
        max-width: 80%;
        margin:auto;
        margin: 100px auto;
    `


class MovieCards extends React.Component {
    constructor() {
        super();
        this.state = {
            imgSrc: 'https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg',
            title: 'Star Wars',
            desc: 'This Star Wars Rogue One Poster is the perfect addition to your dwelling. Be it for your home office a media room a dorm room or family room. It will be the perfect addition to your home décor for years to come. This poster also makes for a great gift for friends, co-workers or family. This poster is a temporary promotion of an idea, product, or event put up in a public space for mass consumption. Typically, posters include both textual and graphic elements, although a poster may be either wholly graphical or wholly text. They are designed to be both eye-catching and informative, may be used for many purposes.',
            ratingNum: 0,
            subscribe: true
        }
    }
    increaseRating = () => {
        if (this.state.ratingNum == 5) {
            return;
        }
        this.setState({
            ratingNum: this.state.ratingNum += 1
        });
    }
    decreaseRating = () => {
        if (this.state.ratingNum == 0) {
            return;
        }
        this.setState({
            ratingNum: this.state.ratingNum -= 1
        });
    }
    subscribe = () => {
        this.setState({
            subscribe: this.state.subscribe = false
        })
    }
    unSubscribe = () => {
        this.setState({
            subscribe: this.state.subscribe = true
        })
    }
    render() {
        let { imgSrc, title, desc, ratingNum, subscribe } = this.state;

        return (
            <>
                {/* <section id="cardsSection" className="container"> */}
                <SectionTag>
                    <div className="card">
                        <div className="row card2">
                            <div className="cardsImg"><img src={imgSrc} alt="movie image" /></div>
                            <div className="cardDetails">
                                <h4>{title}</h4>
                                <p>{desc}</p>
                                <div className="row">
                                    <div className="rating row">
                                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                                        <button onClick={this.decreaseRating.bind(this)}>-</button>
                                        <div className="ratingNum">{ratingNum}</div>
                                        <button onClick={this.increaseRating.bind(this)}>+</button>
                                    </div>
                                    <div className="row btn">
                                        {subscribe ? <button className="subscribe" onClick={this.subscribe.bind(this)}>subscribe</button> : <button className="un-subscribe" onClick={this.unSubscribe.bind(this)} >un-subscribe</button>}
                                        <button>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionTag>
                <div>lorem ipsum is dummy text</div>

            </>
        )
    }
}
export default MovieCards;

// const style = {
//     section:{
//         backgroundColor:'red',
//     }
// }