import React from 'react'
import '../components/Comp.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  state = {
    title: 'Daniel Palencia',
    subtitle: 'A WEB DEVELOPER THROUGH AND THROUGH',
  }

  render() {

    return (
      <header>
        <div className='container container-flex'>
          <div className='site-title'>
            <h1>{this.state.title}</h1>
            <p className='subtitle'>{this.state.subtitle}</p>
          </div>
          <nav className='nav-list'>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/aboutMe">ABOUT ME</Link></li>
              <li><Link to="/recent">RECENT PROJECTS</Link></li>
            </ul>


          </nav>
        </div>

      </header>
    )
  }

}

export default Header
