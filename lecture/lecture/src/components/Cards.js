import React from "react";
import '../dist/style.css'
import Styled from 'styled-components';
const SectionTag = Styled.section`
        background-color:white;
        max-width: 80%;
        margin:auto;
        margin: 100px auto;
    `


class MovieCards extends React.Component {

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
      const { imgSrc, title, desc, ratingNum, subscribe } = this.props.testing;

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
            </>
        )
    }
}
export default MovieCards;
