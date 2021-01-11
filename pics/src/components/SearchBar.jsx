import React, { Component } from 'react'

export class SearchBar extends Component {
  state={text:''}

  // onInputChange(event){
  //   this.setState({text : event.target.value})
  // }
  onFormSubmit = (event)=>{
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
          <input type='text' value = {this.state.text} onChange={(e)=> this.setState({text:e.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
