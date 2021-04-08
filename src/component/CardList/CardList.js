import React, { Component } from 'react'
import Card from './Card/Card'


class CardList extends Component {
    render() {
        const {robots} = this.props
        const cardArray = robots.map((user,i)=>{
            return <Card id = {robots[i].id} 
                name = {robots[i].name} 
                email = {robots[i].email} />
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
