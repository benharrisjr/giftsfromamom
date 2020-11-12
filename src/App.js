import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Nav from './Nav';
import Content from './Content';
import TagSlider from './tagSlider';

import './App.css';
import './css/font.css'
import './css/main.css'
import './css/normalize.css'
import './fonts/AmaticSC-Bold.ttf';
import './fonts/AmaticSC-Regular.ttf';

class App extends React.Component {
  state = {
    currentCategory: 'toddler',
  }
  changeCategory = (newCategory) => {
    this.setState({currentCategory: newCategory});
  }
  render() {
    return (
      <div className="App">
        <Nav changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></Nav>
        <Grid>
          <TagSlider changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}></TagSlider>
          <Content currentCategory={this.state.currentCategory}></Content>
        </Grid>
      </div>
    );
  }
}

export default App;
