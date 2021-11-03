import './App.css';
import './menu.css';
import Welcome from './pages/Welcome/Welcome';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Error from './pages/Error';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CV from './pages/CV/CV';
import Language from './components/Language';


function App() {
  const [language, setLanguage] = useState("danish");
  return(
    <Router>
        <Navbar></Navbar>
        <Language language={language} toggleLanguage={setLanguage}/>
        <Switch>
          <Route exact path="/my-portfolio">
            <Welcome language={language}/>
          </Route>
          <Route path="/portfolio">
            <Portfolio language={language}/>
          </Route>
          <Route path="/CV">
            <CV language={language}/>
          </Route>
          <Route path="*">
            <Error language={language}/>
          </Route>
        </Switch>
        <Contact/>
      </Router>
  )
}

export default App;
