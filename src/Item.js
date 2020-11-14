import React from 'react';

const Item = (props) => {
  return (
    <React.Fragment>
      <div style={{
        margin: '20px',
        backgroundColor: '#fff'
      }}>
        <div style={{ minHeight: '163px'}} dangerouslySetInnerHTML={{__html: props.link.imageLink }} />
        <h3
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontFamily: 'QuattrocentoSans',
            padding: '10px 0'
          }}>
          <a style={{ textDecoration: 'none' }} href={props.link.shortLink}>{props.link.title}</a>
        </h3>
        <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{__html: props.link.description }}></div>
      </div>
    </React.Fragment>
  );  
}

export default Item;