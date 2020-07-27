import React from 'react';
import Header from './utilityComponents/Header'
import Footer from './utilityComponents/Footer'
import Aside from './components/AsideWidget'
import Home from './components/HomePage'
import Recent from './components/RecentPage'
import AboutMe from './components/AboutMePage'

class App extends React.Component {
  state = {
    currentPage: 'null'
  }

  render() {
    const { currentPage } = this.state.currentPage
    return (
      <div className="App">
        <Header />
        <div className="container container-flex">
          <main role='main'>
            {currentPage === 'Home' ? <Home /> : currentPage === 'AboutMe' ? <AboutMe /> : <Recent />}
          </main>

        </div>
        <Footer />
      </div>
    );
  }


}

export default App;
