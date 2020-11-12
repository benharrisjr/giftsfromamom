import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import affLinks from './links';
import Item from './Item';

class Content extends React.Component {
  state = {}
  
  render() {
    const filteredItems = affLinks.filter((item) => item.tags.includes(this.props.currentCategory));
    console.log(filteredItems);
    return (
      <Row>
        {filteredItems.map((currentLink, i) => <Col xs={12} md={6} lg={4}><Item key={i} link={currentLink} /></Col>)}
      </Row>
    );  
  }
}

export default Content;