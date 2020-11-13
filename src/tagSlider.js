import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import hamburger from './images/hamburger.png';
import close from './images/close-light.png';


const navSliderStyle = {
  background: '#cbede5',
  border: 'none',
  padding: '12px 24px',
  display: 'inline-block',
  // borderRadius: '25px',
}
const activeNavSliderStyle = {
  background: '#e8115d',
  color: '#fff',
  border: 'none',
  padding: '12px 24px',
  display: 'inline-block',
  // borderRadius: '25px'
}
const navMenuStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}
const navLink = {
  textDecoration: 'none',
  padding: '12px',
  display: 'inline-block',
}
const categories = [
  {
    title: 'Toddlers',
    tag: 'toddler',
  },
  
  {
    title: 'Kids',
    tag: 'kid',
  },
  {
    title: 'Adults',
    tag: 'adult',
  },
  {
    title: 'Show me Everything!',
    tag: 'all',
  },
]
class TagSlider extends React.Component {
  state = {
    navVisible: false,
  }
  handleNavClick = () => {
    this.setState({ navVisible: !this.state.navVisible });
  }
  handleCategoryClick = (category) => {
    this.props.changeCategory(category);
  }
  render() {
    return (
      <React.Fragment>
        <Grid style={{marginTop: '12px' }}>
          <Row middle="xs">
            <Col xs={2}>
              <button style={{ background: '#f191a5', border: 'none', borderRadius: '6px' }} onClick={this.handleNavClick}>
                <img style={{ position: 'relative', top: '2px', padding: '6px'}} alt="menu" src={hamburger} ></img>
              </button>
            </Col>
            <Col xs={8}>
              <div style={{ padding: '10px 20px 0 20px', fontFamily: 'Cookie', color: '#e8115d', fontSize: '30px', textAlign: 'left' }}>
                Gift ideas for:
              </div>
            </Col>
            {/* <Col xs={6}>
              <div style={{ padding: '10px 20px 0 20px', color: '#e8115d', textAlign: 'right' }}>
                <Link to="/about">About us</Link>
              </div>
            </Col> */}
          </Row>
        </Grid>
        <div className='slider-container'>
          { categories.map((category, i) => <button key={i} onClick={() => this.handleCategoryClick(category.tag)} className='slider-card' style={category.tag === this.props.currentCategory ? activeNavSliderStyle : navSliderStyle}>{category.title}</button>)}
        </div>
        {this.state.navVisible && 
          <div className="slide-in-left" style={navMenuStyle}>
            <ul
              style={{
                backgroundColor: '#fff',
                width: '300px',
                height: '100vh',
                listStyle: 'none',
                paddingLeft: '0',
                marginTop: '0',
              }}
            >
              <li onClick={this.handleNavClick} style={{borderBottom: '2px solid #333'}}><Link style={navLink} to="/about">About Us</Link></li>
              { categories.map((category, i) => <li key={i} onClick={this.handleNavClick} style={{borderBottom: '2px solid #333'}}><Link style={navLink} to={`/${category.tag}`}>{category.title}</Link></li>)}
            </ul>
            <button onClick={this.handleNavClick} style={{ position: 'absolute', top: '10px', right: '15px', border: 'none', background: 'none' }}><img alt="close menu" src={close}></img></button>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default TagSlider;