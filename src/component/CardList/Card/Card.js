import React, { Component } from 'react'


class Card extends Component {
    render() {
        const {title,description,image} = this.props
        return (
            <div className= 'tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5' >
                <img src={image} alt="photos" />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Card
