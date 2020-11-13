import { Link } from "react-router-dom";
import header from './images/header.png';

const Nav = () => {
  return (
    <nav>
      <div style={{ margin: 'auto', paddingBottom: '20px', backgroundColor: '#f191a5' }}>
        <Link to="/">
          <img style={{ position: 'relative', left: '-10px'}} alt="Title icon" src={header}></img>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;