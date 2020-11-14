import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useParams } from 'react-router-dom';

import affLinks from './links';
import Item from './Item';

const Content = (props) => {
  let filteredItems = affLinks;
  if (props.currentCategory !== 'all') {
    filteredItems = affLinks.filter((item) => item.tags.includes(props.currentCategory));
  }
  console.log(filteredItems);
  return (
    <Row style={{ borderRight: '2px solid #f1a9a5',}}>
      {filteredItems.map((currentLink, i) => <Col style={{ borderBottom: '2px solid #f1a9a5', borderLeft: '2px solid #f1a9a5' }} xs={12} md={6} lg={4} key={i}><Item link={currentLink} /></Col>)}
    </Row>
  );  
  
}

export default Content;