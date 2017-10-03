import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  static propTypes = {
    liked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'LikeButton'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {
    const { liked, onChange } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={ onChange }>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
