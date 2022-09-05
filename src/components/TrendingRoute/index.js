import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import TrendingItem from '../TrendingItem'

import Header from '../Header'

import Navbar from '../Navbar'

class TrendingRoute extends Component {
  state = {trendingList: []}

  componentDidMount = () => {
    this.renderTrendingList()
  }

  renderTrendingList = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: eachItem.channel.name,
        viewsCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      console.log(updatedData)
      this.setState({trendingList: updatedData})
    }
    if (response.status === 404) {
      console.log('failed rendering')
    }
  }

  renderResult = () => {
    const {trendingList} = this.state

    return (
      <div>
        <ul>
          {trendingList.map(eachItem => (
            <TrendingItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const result = this.renderResult()
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        {result}
        <Header />
        <Navbar />
      </div>
    )
  }
}

export default TrendingRoute
