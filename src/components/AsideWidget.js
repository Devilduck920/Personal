import React from 'react'
import './Comp.css'
import { Link } from 'react-router-dom'


//

class Aside extends React.Component {
  state = {
    aboutMe: {
      widgetBody: ' READ ABOUT ME ',
      widgetImage: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54002542_10219020705894602_2112862384778379264_n.jpg?_nc_cat=108&_nc_sid=19026a&_nc_ohc=bYjVt5kvuEwAX82gXmT&_nc_oc=AQkJ56CMyShYvHRXFSOHealkaL0CmK2qPQziMDzaS9i-hHi_InlmtmvoRdEVv37A0LWp8udXKEtLfgnkcw75bl1A&_nc_ht=scontent-lax3-1.xx&oh=667c03a726dc4ea7cf18853eeb0b3b7c&oe=5F4C6456'
    },
    recentPosts: [
      {
        postTitle: 'Disney Quiz App',
        postImage: 'https://g.foolcdn.com/editorial/images/568199/disney-magic-kingdom-castle-illustration.jpg',
        imageAlt: 'magic kingdom',
        liveCode: 'https://devilduck920.github.io/Quiz-App/',
        githubCode: ' https://github.com/Devilduck920/Quiz-App',
        route: '/disneyApp'
      },
      {
        postTitle: 'Star Wars Api + Youtube Api',
        postImage: 'https://images.squarespace-cdn.com/content/v1/5995df95e58c62bf343a7838/1511836357125-OOAIAVVLZR4FEOYNW5CK/ke17ZwdGBToddI8pDm48kPg3kkMSlDqGprD-21e6kCJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIKLQjoMTHEldWYTXK7NhTrQG-VDSQcMX4-xxuKYa_e-c/starwars-3.png?format=1500w',
        imageAlt: 'SWAPI',
        liveCode: 'https://devilduck920.github.io/Youtube-Swapi-API-CX-/',
        githubCode: 'https://github.com/Devilduck920/Youtube-Swapi-API-CX-',
        route: '/swapiApp'
      }, {
        postTitle: 'Weather App',
        postImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz5_MSd5YCveNW5v17B2srLblp2JkuAyUXtQ&usqp=CAU',
        imageAlt: 'Cloudy Skies',
        liveCode: 'https://palencia-weather-application.herokuapp.com/',
        githubCode: 'https://github.com/Devilduck920/node3-weather-website',
        route: '/weatherApp'
      }]
  }


  render() {
    const mappedRecentPosts = this.state.recentPosts.map(st => {
      return (
        <div className="widget-recent-post">
          <h3 className='widget-recent-post-title'>{st.postTitle}</h3>
          <Link to={st.route}><img src={st.postImage} alt={st.imageAlt} className="widget-image widget-about-image" /></Link>
          <div className='widgetLinks'>
            <a href={st.githubCode}>Code</a>
            <a href={st.liveCode}>Live </a>
          </div>

        </div>
      )
    })

    return (
      <aside>
        <div class="sidebar-widget">
          <h2 class='widget-title'>ABOUT ME </h2>
          <Link to='/aboutMe' >
            <img src={this.state.aboutMe.widgetImage}
              alt="widget-aboutme-pic" class="widget-image about-widget-image " />
            <p class="widget-body">{this.state.aboutMe.widgetBody}</p>
          </Link>
        </div>

        <div className="sidebar-widget">
          <h2 className="widget-title">RECENT PROJECTS</h2>
          {mappedRecentPosts}
        </div>
      </aside >
    )
  }
}
export default Aside
