import React from 'react'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to='/'>Home</Link>
        {' '}
        <Link to='/todo'>Todo</Link>
        {' '}
        <Link to='/real-world'>Real World</Link>
        {' '}
        <Link to='/async'>Async</Link>
      </header>
      <div>
        <button onClick={() => hashHistory.push('/todo')}>Go to /todo</button>
      </div>
      <div id='content' className='content section section-white'>{children}</div>
    </div>
  )
}
