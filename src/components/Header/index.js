import {Component} from 'react'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {AiFillCloseCircle} from 'react-icons/ai'

import {FaMoon} from 'react-icons/fa'

class Header extends Component {
  state = {isDark: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  renderHeader = () => {
    const {isDark} = this.state

    return (
      <div className="header">
        {isDark ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="website logo"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        )}
        <button
          type="button"
          data-testid="theme"
          onClick={this.changeTheme}
          className="button"
        >
          <FaMoon />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="profile-icon"
        />

        <Popup
          modal
          trigger={
            <button type="button">
              <h1>Logout</h1>
            </button>
          }
        >
          {close => (
            <div>
              <button type="button" onClick={() => close()}>
                <AiFillCloseCircle className="sort-by-icon" />
              </button>
              <p>Are you sure, you want to logout</p>
              <button type="button" onClick={() => close()}>
                Cancel
              </button>
              <button type="button" onClick={this.onClickLogout}>
                Confirm
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }

  render() {
    const HeaderResult = this.renderHeader()
    return <div>{HeaderResult}</div>
  }
}

export default Header
