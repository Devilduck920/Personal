import React from 'react';
import Header from './utilityComponents/Header'
import Footer from './utilityComponents/Footer'
import Aside from './components/AsideWidget'
import Home from './components/HomePage'
import Recent from './components/RecentPage'
import AboutMe from './components/AboutMePage'
import WeatherApp from './components/subComponents/weatherApp'
import DisneyApp from './components/subComponents/disneyApp'
import SwapiApp from './components/subComponents/swapiApp'
import { Route, Switch } from 'react-router-dom'



class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <div className="container container-flex">
          <main role='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/aboutMe' component={AboutMe} />
              <Route path='/recent' component={Recent} />
              <Route path='/weatherApp' component={WeatherApp} />
              <Route path='/disneyApp' component={DisneyApp} />
              <Route path='/swapiApp' component={SwapiApp} />
            </Switch>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }


}

export default App;
