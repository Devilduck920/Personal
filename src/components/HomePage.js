import React from 'react'
import Featured from './Featured'
import Recent from './RecentPage'


const Home = () => {
  return (
    <React.Fragment>
      <h1>Latest Project</h1>
      <Featured />
      <Recent />
    </React.Fragment>
  )
}

export default Home
