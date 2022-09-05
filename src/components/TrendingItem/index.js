import {Link} from 'react-router-dom'

import './index.css'

const TrendingItem = props => {
  const {itemDetails} = props
  const {title, thumbnailUrl, viewsCount, publishedAt, channel} = itemDetails

  return (
    <div className="item-container">
      <Link to="/">
        <li>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <img src={thumbnailUrl} alt="video thumbnail" />
          </div>
          <div>
            <p key={title}>{title}</p>
            <p>{channel}</p>
            <p>{viewsCount}</p>
            <p>{publishedAt}</p>
          </div>
        </li>
      </Link>
    </div>
  )
}

export default TrendingItem
