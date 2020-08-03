import React from 'react'

class SwapiApp extends React.Component {
  state = {
    articleBody: 'Come get basic information mixed with a youtube video about many characters from your favorite star wars movies.',
    articleTitle: 'Star Wars Api + Youtube Api ',
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5995df95e58c62bf343a7838/1511836357125-OOAIAVVLZR4FEOYNW5CK/ke17ZwdGBToddI8pDm48kPg3kkMSlDqGprD-21e6kCJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIKLQjoMTHEldWYTXK7NhTrQG-VDSQcMX4-xxuKYa_e-c/starwars-3.png?format=1500w',
    imageAlt: 'r2d2 and c3po project',
    dateCreated: 'August 3 2019',
    liveCode: 'https://devilduck920.github.io/Youtube-Swapi-API-CX-/',
    githubCode: 'https://github.com/Devilduck920/Youtube-Swapi-API-CX-'
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



export default SwapiApp
