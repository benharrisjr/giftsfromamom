import { Link } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import header from './images/header.png';
import tree from './images/tree.png';
import santaHat from './images/hat.png';

const Nav = () => {
  return (
    <nav>
      <Link style={{ textDecoration: 'none' }} to="/">
        <div className="header-background">
          {/* <Row center="xs">
            <Col>
              <div style={{ position: 'relative', left: '-10px', borderRadius: '45px', border: '1px solid aliceblue' }}>
                <img style={{ transform: 'rotateY(180deg)', position: 'absolute', top: '-15px', right: '33px', zIndex: '2'}} alt="santa hat" src={santaHat}></img>
                <img style={{ position: 'relative', left: '1px', top:'2px', height: 'auto', width: '80px', borderRadius: '42px', margin: '2px', border: '2px solid aliceblue' }} alt="Title icon" src={header}></img>
              </div>
            </Col>
            <Col><h1>Gift~Ideas<br></br> from a Mom</h1></Col>
            <Col><img style={{ transform: 'rotateY(180deg)', position: 'absolute', top: '33px', zIndex: '2'}} alt="tree" src={tree}></img></Col>
          </Row> */}
        </div>
      </Link>
    </nav>
  );
}

export default Nav;