import React from 'react'

class weatherApp extends React.Component {
  state = {
    articleBody: 'Find out what the weather is like anytime you want.',
    articleTitle: 'Weather App',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz5_MSd5YCveNW5v17B2srLblp2JkuAyUXtQ&usqp=CAU',
    imageAlt: 'Cloudy Skies',
    dateCreated: 'October 2, 2019',
    liveCode: 'https://palencia-weather-application.herokuapp.com/',
    githubCode: 'https://github.com/Devilduck920/node3-weather-website'
  }
  render() {
    return (
      <main role='main'>
        <img src={this.state.imageSrc} alt="about me" className='image-full' />
        <p >
          <h1>{this.state.articleTitle}</h1>
          <h4>{this.state.dateCreated}</h4>
          <h2>{this.state.articleBody}</h2>
        </p>
        <div className='focusedAppDiv'>
          <a className='focusedAppLink' href={this.state.githubCode}>Code</a>
          <a className='focusedAppLink' href={this.state.liveCode}>Live</a>
        </div>

      </main>
    )
  }

}



export default weatherApp
