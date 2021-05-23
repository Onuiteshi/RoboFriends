import React, { Component } from 'react'
import Card from './Card/Card'



class CardList extends Component {
    render() {
        const {robots} = this.props
        const cardArray = robots.map((user,i)=>{
            return <Card 
                title = {robots[i].GameTitle} 
                description = {robots[i].GameDescription}
                image = {robots[i].GameImage} />
        })
        // if(true){
        //     throw new Error('NOOOOO')
        // }else{
            return (
                <div>
                    {cardArray}
                </div>
            )  
        
        
    }
}

export default CardList
