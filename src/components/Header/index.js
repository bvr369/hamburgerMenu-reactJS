// Write your code here
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiInformationCircle} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="webiste logo"
      className="website-logo"
    />
    <div className="popup-cont">
      <Popup
        trigger={<GiHamburgerMenu />}
        style={{border: 'none'}}
        position="bottom-left"
        overlayStyle={overlayStyles}
      >
        <div className="links-popups">
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
            <div className="link-cont">
              <AiFillHome />
              <h1 className="link-head">Home</h1>
            </div>
          </Link>
          <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>
            <div className="link-cont">
              <HiInformationCircle />
              <h1 className="link-head">About</h1>
            </div>
          </Link>
        </div>
      </Popup>
    </div>
  </div>
)
export default Header
