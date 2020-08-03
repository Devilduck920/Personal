import React from 'react'
import './Comp.css'

class Featured extends React.Component {
  state = {
    articleBody: 'Find out what the weather is like anytime you want.',
    articleTitle: 'Weather App',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz5_MSd5YCveNW5v17B2srLblp2JkuAyUXtQ&usqp=CAU',
    imageAlt: 'Cloudy Skies',
    dateCreated: 'October 2, 2019',
  }

  render() {
    return (
      <article className='article-featured'>
        <h2 className='article-title'>{this.state.articleTitle}</h2>
        <img className='article-image' alt='pot'
          src={this.state.imageSrc} />
        <p className='article-info'>Created: {this.state.dateCreated}</p>
        <p className='article-body'>{this.state.articleBody}</p>
        <a href="#" className='article-read-more'>CONTINUE READING</a>
      </article>
    )
  }



}

export default Featured
