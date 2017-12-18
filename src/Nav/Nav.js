import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

class Nav extends Component {
  render () {
    return (
      <nav>
      <ul>
      <li> <Link to='/dogs'>Dogs</Link></li>
      <li> <Link to='/about'>About</Link></li>
      <li> <Link to='/resources'>Resources</Link></li>
      <li> <Link to='/contact'>Contact</Link></li>

      </ul>
      </nav>
    )
  }
}

export default Nav
