import React from 'react'
import './Comp.css'



class Recent extends React.Component {
  state =
    [
      {
        articleBody: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        articleTitle: 'Keeping cookin simple',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvLquTsh896bcjq4g5tJsngpQXRWMinGbmuA&usqp=CAU',
        imageAlt: 'hand and pot',
        dateCreated: 'July 19, 2019',
        comments: ' 0 comments'
      },
      {
        articleBody: 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktopremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
        articleTitle: 'Simplicity and work',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT90AJOZhq3frwtu4oIMPxqe-HckCsiApgZVQ&usqp=CAU',
        imageAlt: 'weed leaf',
        dateCreated: 'July 12, 2019',
        comments: ' 0 comments'
      }
    ]

  render() {
    const mappedStore = this.state.map((data, key) => {
      return (
        <article className='article-recent' key={key}>
          <div className='article-recent-main'>
            <h2 className="article-title"> {this.state[key].articleTitle}</h2>
            <p className='article-body'>{this.state[key].articleBody}</p>
            <a className='article-read-more' href="#">CONTINUE READING</a>
          </div>
          <div className="article-recent-secondary">
            <img
              src={this.state[key].imageSrc}
              alt={this.state[key].imageAlt} className='article-image' />
            <p className='article-info'> {this.state[key].dateCreated} | {this.state[key].comments} </p>
          </div>
        </article>
      )
    }
    )
    return mappedStore
  }

}




export default Recent

