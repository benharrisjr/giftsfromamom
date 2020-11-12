import React from 'react';
import navPic from './goofynoellemommy.jpg';
import header from './images/header.png';
import hamburger from './hamburger.svg';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div style={{ margin: 'auto', paddingBottom: '20px', backgroundColor: '#f191a5' }}>
          <img style={{ position: 'relative', left: '-10px'}} alt="Title icon" src={header}></img>
        </div>
      </nav>
    );
  }
}

export default Nav;