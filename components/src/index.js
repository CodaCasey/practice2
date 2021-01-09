import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './ComponentDetail.js'
const App = ()=>{
  return (
    <div className="ui container comments">
      <ComponentDetail />
    </div>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'))

