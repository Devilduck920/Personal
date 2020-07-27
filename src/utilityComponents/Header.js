import React from 'react'
import '../components/Comp.css'


const Header = () => {
  const store = {
    title: 'Living the simple life',
    subtitle: 'A BLOG EXPLORING MINIMALISM IN LIFE',
  }
  return (
    <div className='container container-flex'>
      <div className='site-title'>
        <h1>{store.title}</h1>
        <p className='subtitle'>{store.subtitle}</p>
      </div>
      <nav className='nav-list'>
        <ul>
          <li><a href="index.html" className='current-page'>HOME</a></li>
          <li><a href="about-me.html">ABOUT ME</a></li>
          <li><a href="recent-posts.html">RECENT POSTS</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
