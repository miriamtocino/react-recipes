import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id, liked } = this.props
    this.props.onChange(_id, { liked: !liked })
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="RecipeItem">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
          </ul>
          <footer>
            <LikeButton onChange={this.toggleLike.bind(this)} liked={liked} />
          </footer>
        </div>
      </article>
    )
  }
}

export default RecipeItem
