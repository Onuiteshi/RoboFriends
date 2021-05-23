import React, {Component} from 'react';
// import axios from 'axios'
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
  
  onClick = (e)=>{
    e.preventDefault()
    const {robots} = this.state

    if(robots && robots.length){
      // FILTER AND GET GROUPS
      let filterRobots1 = robots.filter((values)=>{
        return values.Group === 'Academic' 
      })
      let filterRobots2 = robots.filter((values)=>{
        return values.Group === 'Financial Literacy' 
      })
      if(e.target.value==='Academic'){
        this.setState({
          robots: filterRobots1
        })
      }else if (e.target.value==='Fl'){
        this.setState({
          robots: filterRobots2
        })
      }

      // FILTER AND GET LEVELS
      let filterRobots3 = robots.filter((values)=>{
        return values.Level === 'Key Stage 1' 
      })
      let filterRobots4 = robots.filter((values)=>{
        return values.Level === 'Financial Literacy' 
      })
      let filterRobots5 = robots.filter((values)=>{
        return values.Level === 'Key Stage 2' 
      })
      if(e.target.value==='Ks1'){
        this.setState({
          robots: filterRobots3
        })
      }else if (e.target.value==='Fl'){
        this.setState({
          robots: filterRobots4
        })
      }else{
        this.setState({
          robots: filterRobots5
        })
      }

      // GET ALL
      

      if(e.target.value ==='all'){
        fetch("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter")
        .then(res => res.json())
        .then(users => this.setState({robots:users}))
       
      }
    }

  }

  componentDidMount(){
    fetch("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter")
    .then(res => res.json())
    .then(users => this.setState({robots:users}))
  }

  // componentDidMount(){
    
  //     axios({
  //         method: 'get',
  //         url: 'https://partners.9ijakids.com/index.php',
  //         params:{
  //           "partnerId" : 55577,
  //           "accessToken" : "l0lawtvv-94bv-oi4d-u808-5ubz",
  //           "action" : "catalogfilter"
  //         },
  //         headers:{
  //           "Access-Control-Allow-Origin": '*'
  //         }
  //     })
  //     .then((response) => { 
  //         console.log(response);
  //         response.json()
  //         this.setState({robots:response})
  //     })
  //     .catch((err) => {
  //         console.log(err.response);
  //     })
    
    
  // }

  

  render() {
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.Topic.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
    })
    const {robots} = this.state
    if(!robots.length){
      return (
        <div className='text-center'>
          <img className="rounded" width="60%"  src="https://i.pinimg.com/originals/e2/6d/87/e26d873ee68fbcd9dc1c40d8b0c6b3b4.gif" alt="" />
        </div>
      )
    }else{
      return (
        <div className="tc">
          <Header />
          <SearchBox onClick = {this.onClick} onSearch = {this.OnSearchChange} />
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
