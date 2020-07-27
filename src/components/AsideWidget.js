import React from 'react'
import './Comp.css'

class Aside extends React.Component {
  state = [
    {
      postTitle: 'Keeping cooking simple',
      postImage: 'https://spca.bc.ca/wp-content/uploads/2011-canada-goose-gosling-patients-and-mallard-duckling-patients-together-825x549.jpg',
      imageAlt: 'Weed Stuff'
    },
    {
      postTitle: 'Simplicity and work',
      postImage: 'https://i.pinimg.com/236x/15/65/71/156571c64b072031c8a553c9c47d1a52.jpg',
      imageAlt: 'Weed Stuff'
    },

  ]

  render() {
    return (
      <aside>
        <div className="sidebar-widget">
          <h2 className="widget-title">RECENT POSTS</h2>
          <div className="widget-recent-post">
            <h3 className='widget-recent-post-title'>{this.state.postTitle}</h3>
            <img
              src={this.state.postImage}
              alt={this.state.imageAlt} className="widget-image" />
          </div>
        </div>
      </aside >
    )
  }
}
export default Aside
