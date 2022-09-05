import {Link} from 'react-router-dom'

import {FaGamepad} from 'react-icons/fa'

import {AiFillHome, AiFillFire, AiFillSave} from 'react-icons/ai'

const Navbar = () => (
  <div>
    <div className="nav-container">
      <Link to="/">
        <AiFillHome className="link-icon" />
        Home
      </Link>

      <Link to="/trending">
        <AiFillFire className="link-icon" />
        Trending
      </Link>
      <Link to="/gaming">
        <FaGamepad className="link-icon" />
        Gaming
      </Link>
      <Link to="/saved-videos">
        <AiFillSave className="link-icon" />
        Saved Videos
      </Link>
    </div>

    <div>
      <p>CONTACT US</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
        alt="facebook logo"
        className="profile-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
        alt="twitter logo"
        className="profile-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
        alt="linked in logo"
        className="profile-icon"
      />
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </div>
  </div>
)

export default Navbar
