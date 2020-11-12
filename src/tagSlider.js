import React from 'react';

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
]
class TagSlider extends React.Component {
  handleCategoryClick = (category) => {
    this.props.changeCategory(category);
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: '10px 20px 0 20px', fontFamily: 'Hibernate', color: '#e8115d', fontSize: '30px', textAlign: 'left' }}>Gift ideas for:</div>
        <div className='slider-container'>
          { categories.map((category, i) => <button key={i} onClick={() => this.handleCategoryClick(category.tag)} className='slider-card' style={category.tag === this.props.currentCategory ? activeNavSliderStyle : navSliderStyle}>{category.title}</button>)}
        </div>
      </React.Fragment>
    );
  }
}

export default TagSlider;