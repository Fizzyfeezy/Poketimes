import React, {Component} from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
// import M from 'materialize-css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route path = '/about' component = {About} />
              <Route path = '/contact' component = {Contact} />
              <Route path = '/:post_id' component = {Post} />
            </Switch> 
          </div>
      </BrowserRouter>  
    );
  }  
}

export default App;
