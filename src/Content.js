import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { useParams } from 'react-router-dom';

import affLinks from './links';
import Item from './Item';

const Content = (props) => {
  const { id } = useParams();
  console.log(id);
  let filteredItems = affLinks;
  if (props.currentCategory !== 'all') {
    const selectedTag = id ? id : props.currentCategory;
    filteredItems = affLinks.filter((item) => item.tags.includes(selectedTag));
  }
  console.log(filteredItems);
  return (
    <Row>
      {filteredItems.map((currentLink, i) => <Col xs={12} md={6} lg={4} key={i}><Item link={currentLink} /></Col>)}
    </Row>
  );  
}

export default Content;