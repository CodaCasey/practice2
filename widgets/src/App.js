import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'
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

const options =[
  {
    label: 'The Color of Love',
    value: 'Red'
  },
  {
    label: 'The color of my Waning',
    value: 'Blue'
  },
  {
    label: 'The color of Envy ',
    value: 'Yellow'
  },
]


export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
  <div>
    <Header/>
    <Route path='/'>
    <Accordion items={items}/>
    </Route>
    <Route path='/list'>
    <Search/>
    </Route>
    <Route path='/dropdown'>
    <Dropdown
    label='select a color'
    options={options}
    selected={selected}
    onSelectedChange={setSelected}
    />
    </Route>
    <Route path='/translate'>
    <Translate/>
    </Route>


  </div>
  )

}

