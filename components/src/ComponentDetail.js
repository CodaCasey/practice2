import React from 'react';
import faker from 'faker';


const ComponentDetail =(props)=>{
  return (

      <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={props.avi} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.time}</span>
          </div>
          <div className="text">{props.com}</div>
        </div>
      </div>

  )
}

export default ComponentDetail