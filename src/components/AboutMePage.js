import React from 'react'
import './Comp.css'

const AboutMe = () => {
  const store = {
    articleTitle: 'My name is Daniel Palencia,',
    imageSrc: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57414145_10219281043642883_4821160915007176704_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=Hgpu7eGEZS8AX-kbD2E&_nc_ht=scontent-lax3-1.xx&oh=20639e16b9a6d482ef8e604e518aa939&oe=5F4C4C70',
    imageAlt: 'xmas family picture',
  }
  return (
    <main role='main'>
      <img src={store.imageSrc} alt="about me" className='image-full' />
      <h1> </h1>
      <p>
        <strong>I began my Web Development journey </strong> around the time my son was going to be born.
        I knew I had to make something of myself so that my son could be proud of dad .</p>
      <p>
        <strong>I enrolled in a coding bootcamp </strong> called Bloc. The first week i began the bootcamp my
        son was born and i started thinking maybe this was a bad time to join a bootcamp... later finding out i was right. </p>
      <p>
        <strong>I was unable to complete the program </strong> due to my full-time job and my new found Daddy Duties.
        I do not regret enrolling in this bootcamp because it lit a spark of interest and excitement in my continuing self-education.
        After being released from the program i told myself that i was not going to stop here.
      </p>
      <h3>How i turned things around</h3>
      <p><strong> I don't go a day without</strong> practicing and learning new code. I found the field i want to immerse myself in.</p>
      <p>Now that i have a direction of where to go in life i can finally focus on my craft.</p>
      <h3>" Thinking is the hardest work there is, which is probably the reason so few engage in it. " - <strong> Henry Ford </strong></h3>
    </main>
  )
}

export default AboutMe
