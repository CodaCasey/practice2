import React, {Component} from 'react'
import axios from 'axios'
import SearchBar from './SearchBar.jsx'
import ImageList from './ImageList.jsx'


 class App extends Component {
  state={pics:[]}
  onSearchSubmit = this.onSearchSubmit.bind(this)
 async onSearchSubmit(term){
   const response = await axios
    .get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers:{
        Authorization: 'Client-ID HumRztOcJWa755VqtQhJDx-VEjQ4XwPY41QqHhRMwv0'
      }
    })
    this.setState({pics:response.data.results})
  }
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        results:{this.state.pics.length}
        <ImageList images={this.state.pics}/>
      </div>
    )
  }
}



export default App
