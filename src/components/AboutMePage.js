import React from 'react'
import './Comp.css'

const AboutMe = () => {
  const store = {
    articleBody: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ..",
    articleTitle: 'Finding simplicity in life',
    imageSrc: 'https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
    imageAlt: 'hand and pot',
    dateCreated: 'July 19, 2019',
    comments: ' 0 comments'
  }
  return (
    <main role='main'>
      <img src={store.imageSrc} alt="about me " className='image-full' />
      <h2>My name is Daniel and Living a gabros life saved my life</h2>
      <p><strong>I used to be a gabros rat</strong>."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        "</p>
      <p>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatu</p>

      <h3>How i turned things around</h3>
      <p><strong>r. Excepteur sint occaecat cupidatat non proident</strong>. r. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.r. Excepteur sint occaecat cupidatat non
      </p>
      <p>proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h3>Now i live the simple life</h3>
      <p>proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
      <p>proident, sunt in culpa ui officia deserunt <strong>proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</strong> proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. mollit anim id est laborum.</p>
    </main>
  )
}

export default AboutMe
