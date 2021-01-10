import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';

 class App extends Component {
  //  constructor(props){
  //    super(props)

  //    this.state = {
  //      lat:null,
  //     errorMsg: '',
  //     };


  //  }

  //we dont need to define contructor all the time
  state={lat:null,errorMsg:''}
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({lat:position.coords.latitude}),
      err=>
        this.setState({errorMsg:err.message})

    );
   }

  render() {

    //return (
      if(this.state.errorMsg && !this.state.lat){
        return <div> Error: {this.state.errorMsg}</div>
      }
      if(!this.state.errorMsg && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }
      if(!this.state.errorMsg && !this.state.lat){
        return <div> Loading...</div>
      }

    //)
  }
}



ReactDOM.render(<App/>,document.getElementById("root"))

