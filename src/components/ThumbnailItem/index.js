// Write your code here.
import './index.css'
import {Component} from 'react'

class ThumbItem extends Component {
  render() {
    const {info, changephoto} = this.props
    const {thumbnailUrl, imageUrl, imageAltText, thumbnailAltText} = info
    const onChangeUrl = () => {
      changephoto(imageUrl, imageAltText)
    }
    return (
      <li className="item">
        <button className="but" type="button" onClick={onChangeUrl}>
          <img src={thumbnailUrl} alt={thumbnailAltText} className="thum" />
        </button>
      </li>
    )
  }
}
export default ThumbItem
