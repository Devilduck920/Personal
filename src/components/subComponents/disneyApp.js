import React from 'react'

class DisneyApp extends React.Component {
  state = {
    articleBody: 'A disney quiz that will leaving you guessing.',
    articleTitle: 'Disney Quiz App',
    imageSrc: 'https://g.foolcdn.com/editorial/images/568199/disney-magic-kingdom-castle-illustration.jpg',
    imageAlt: 'Magic Kingdom',
    dateCreated: 'July 12, 2019',
    liveCode: 'https://devilduck920.github.io/Quiz-App/',
    githubCode: ' https://github.com/Devilduck920/Quiz-App'
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



export default DisneyApp
