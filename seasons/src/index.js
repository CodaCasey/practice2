import React, { Component } from 'react'
import ReactDOM from 'react-dom';


 class App extends Component {
   constructor(props){
     super(props)

     this.state = {
       lat:null,
      errorMsg: '',
      };

     window.navigator.geolocation.getCurrentPosition(
      (position) =>{
        this.setState({lat:position.coords.latitude});
      },
      (err)=>{
        this.setState({errorMsg:err.message})
      }
    );
   }
  render() {

    //return (
      if(this.state.errorMsg && !this.state.lat){
        return <div> Error: {this.state.errorMsg}</div>
      }
      if(!this.state.errorMsg && this.state.lat){
        return <div> Lattitude:{this.state.lat}</div>
      }
      if(!this.state.errorMsg && !this.state.lat){
        return <div> Loading...</div>
      }

    //)
  }
}



ReactDOM.render(<App/>,document.getElementById("root"))

