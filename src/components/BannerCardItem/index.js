import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={className}>
      <div className="content-container">
        <h1 className="card-h1">{headerText}</h1>
        <p className="card-content">{description}</p>
        <button type="button" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
