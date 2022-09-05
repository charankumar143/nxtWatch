import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    displayPassword: false,
    blurUser: false,
    blurPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  triggerUsername = event => {
    if (event.target.value === '') {
      this.setState({blurUser: true})
    }
  }

  triggerPassword = event => {
    if (event.target.value === '') {
      this.setState({blurPassword: true})
    }
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeDisplayPassword = () => {
    this.setState(prevState => ({displayPassword: !prevState.displayPassword}))
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      displayPassword,
      blurUser,
      blurPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
          className="image-icon"
        />
        <form onSubmit={this.submitForm}>
          <label htmlFor="username">USERNAME</label>
          <br />
          <input
            type="text"
            value={username}
            id="username"
            onChange={this.onChangeUsername}
            onBlur={this.triggerUsername}
            placeholder="Username"
          />
          <br />
          {blurUser ? 'Please Enter Username' : ''}
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          {displayPassword ? (
            <input type="text" value={password} />
          ) : (
            <input
              type="password"
              value={password}
              id="password"
              onChange={this.onChangePassword}
              onBlur={this.triggerPassword}
              placeholder="Password"
            />
          )}
          <br />
          {blurPassword ? 'Please Enter Password' : ''}
          <br />
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.onChangeDisplayPassword}
          />

          <label htmlFor="showPassword">Show Password</label>
          <br />
          <button type="submit" className="button-item">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
