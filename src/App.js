import {Route, Switch} from 'react-router-dom'

import './App.css'

import LoginForm from './components/LoginForm'

import HomePage from './components/HomePage'

import NotFound from './components/NotFound'

import TrendingRoute from './components/TrendingRoute'

import SavedVideosRoute from './components/SavedVideosRoute'

import GamingRoute from './components/GamingRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/trending" component={TrendingRoute} />
      <Route exact path="/saved-videos" component={SavedVideosRoute} />
      <Route exact path="/gaming" component={GamingRoute} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
