import React from 'react'
import Projects from './Projects'
import Contact from './Contact'
import Canvas from './Canvas'
import Nav from './Nav'
import About from './About'
import './App.css'


import { BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useParams 
} from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonLast, ButtonFirst } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class App extends React.Component {
  render() {
    
    return (
      <div className="App">

          <main className="bottom-spacer">
            <Switch className="switch">
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path="/">
                <Canvas />
              </Route>
            </Switch>
          </main>
        <footer>
          <Nav />
        </footer>
      </div>
    )
  }
}

export default App