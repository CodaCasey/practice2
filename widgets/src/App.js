import React from 'react'
import Accordion from './components/Accordion'

const items =[
  {
    title: 'what is the sky blue',
    content: 'because the ocean said so',
  },

  {
    title: 'Grizzley Bear vs Gorrila',
    content: 'The Grizzley bear would destroy the gorrilia so badley it wouldnt even be funny seriously who is it even a debate',
  },

  {
    title: 'Tigers or Lions',
    content: 'Honestly screw Lions, bunch of premadonas the whole lot. Tigers are a Felines, Feline. Tigers win on style points, dont at me I said what I said',
  }
]

export default () => {
  return <div>
      <Accordion items={items}/>
  </div>

}

