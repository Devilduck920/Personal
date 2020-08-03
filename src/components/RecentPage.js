import React from 'react'
import './Comp.css'
import { Link } from 'react-router-dom'


class Recent extends React.Component {
  state =
    [
      {
        route: '/disneyApp',
        articleBody: 'A disney quiz that will leaving you guessing.',
        articleTitle: 'Disney Quiz App',
        imageSrc: 'https://g.foolcdn.com/editorial/images/568199/disney-magic-kingdom-castle-illustration.jpg',
        imageAlt: 'Magic Kingdom',
        dateCreated: 'July 12, 2019',
        liveCode: 'https://devilduck920.github.io/Quiz-App/',
        githubCode: ' https://github.com/Devilduck920/Quiz-App'
      },
      {
        route: '/swapiApp',
        articleBody: 'Come get basic information mixed with a youtube video about many characters from your favorite star wars movies.',
        articleTitle: 'Star Wars Api + Youtube Api ',
        imageSrc: 'https://images.squarespace-cdn.com/content/v1/5995df95e58c62bf343a7838/1511836357125-OOAIAVVLZR4FEOYNW5CK/ke17ZwdGBToddI8pDm48kPg3kkMSlDqGprD-21e6kCJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIKLQjoMTHEldWYTXK7NhTrQG-VDSQcMX4-xxuKYa_e-c/starwars-3.png?format=1500w',
        imageAlt: 'r2d2 and c3po project',
        dateCreated: 'August 3 2019',
        liveCode: 'https://devilduck920.github.io/Youtube-Swapi-API-CX-/',
        githubCode: 'https://github.com/Devilduck920/Youtube-Swapi-API-CX-'
      },
      {
        route: '/weatherApp',
        articleBody: 'Find out what the weather is like anytime you want.',
        articleTitle: 'Weather App',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz5_MSd5YCveNW5v17B2srLblp2JkuAyUXtQ&usqp=CAU',
        imageAlt: 'Cloudy Skies',
        dateCreated: 'October 2, 2019',
        liveCode: 'https://palencia-weather-application.herokuapp.com/',
        githubCode: 'https://github.com/Devilduck920/node3-weather-website'
      }
    ]

  render() {
    const mappedStore = this.state.map((data, key) => {
      console.log(data)
      return (
        <article className='article-recent' key={key}>
          <div className='article-recent-main'>
            <h2 className="article-title"> {this.state[key].articleTitle}</h2>
            <p className='article-body'>{this.state[key].articleBody}</p>
            <a className='article-read-more' href={this.state[key].liveCode}>See Project Live!</a><br />
            <a className='article-read-more' href={this.state[key].githubCode}>See Code</a>
            <p className='article-info'><i>Created: {this.state[key].dateCreated}</i></p>
          </div>
          <div className="article-recent-secondary">
            <Link to={this.state[key].route}>
              <img
                src={this.state[key].imageSrc}
                alt={this.state[key].imageAlt} className='article-image' />
            </Link>
          </div>
        </article>
      )
    }
    )
    return mappedStore
  }

}




export default Recent

