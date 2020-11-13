import React from 'react';
import { Grid } from 'react-flexbox-grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Nav';
import Content from './Content';
import About from './About';
import TagSlider from './tagSlider';

import './App.css';
import './css/font.css'
import './css/main.css'
import './css/animations.css'
import './css/normalize.css'
import './fonts/AmaticSC-Bold.ttf';
import './fonts/AmaticSC-Regular.ttf';

class App extends React.Component {
  state = {
    currentCategory: window.location.pathname.replace('/','') || 'toddler',
  }
  changeCategory = (newCategory) => {
    this.setState({currentCategory: newCategory});
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></Nav>
          <Grid>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>  
              <Route path="/:id">
                <TagSlider changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></TagSlider>
                <Content changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></Content>
              </Route>
              <Route path="/">
                <TagSlider changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></TagSlider>
                <Content changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></Content>
              </Route>
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
