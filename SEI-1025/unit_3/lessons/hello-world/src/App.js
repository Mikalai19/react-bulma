import React, { Component } from 'react'
import './App.css';

//Components
import Racing from './Racing';
import Basketball from './Basketball';
import Cover from './Cover';
import Football from './Football';
import Volleyball from './Volleyball';
import Login from './Login';
import Forum from './Forum';
import Contact from './Contact';
import Documentation from './Documentation';
import Hero from './Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Racing />
       <Basketball /> */}
        {/*<Football />}
        {<Volleyball />*/}
        {/*<Cover />*/}
        {/*<Login />*/}
        {/*<Forum />*/}
        {/*<Contact />*/}
        {<Hero />}





      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component -> made out of a function
// class component -> is made out of a class