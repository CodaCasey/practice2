import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './ComponentDetail.js'
import ApprovalCard from './ApprovalCard.js'
const App = ()=>{
  return (
    <div className="ui container comments">
      <ApprovalCard>you dont want these problems</ApprovalCard>
      <ApprovalCard>
      <ComponentDetail
       author="Jon"
       time="today at 3:00"
       com="sad boi hours"
       avi={faker.image.image()} />
      </ApprovalCard>
      <ApprovalCard>
      <ComponentDetail
       author="Snow"
       time="today at 5:00"
       com="who want me"
       avi={faker.image.image()} />
       </ApprovalCard>
       <ApprovalCard>
      <ComponentDetail
       author="Rules"
       time="yesterday at 2:00"
       com="i miss listening to X"
       avi={faker.image.image()}/>
       </ApprovalCard>
    </div>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'))

