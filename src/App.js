import React, {Component} from 'react';
import './App.css';
import CardList from './component/CardList/CardList';
import  ErrorBoundary  from './component/ErrorBoundary/ErrorBoundary';
import Header from './component/Header/Header';
import Scroll from './component/Scroll/Scroll';
import SearchBox from './component/SearchBox/SearchBox';







class App extends Component {
  constructor(){
    super()
    this.state = {
      robots : [],
      searchfield : ''
    }
  }

  OnSearchChange = e =>{this.setState({searchfield : e.target.value})}

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({robots:users}))
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    const {robots} = this.state
    if(!robots.length){
      return <img  src="https://cdn.dribbble.com/users/3337757/screenshots/6825268/076_-loading_animated_dribbble_copy.gif" />
    }else{
      return (
        <div className="tc">
          <Header />
          <SearchBox onSearch = {this.OnSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundary>
            
           
          </Scroll>
          
        </div>
      )
    }
  }
}

export default App
