import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

const App = (props) => {
  return (
    <div className="ui container">
      <PostList/>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

 export default App //connect(mapStateToProps, mapDispatchToProps)(App)
