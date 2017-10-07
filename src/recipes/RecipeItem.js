import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props

    return(
      <article className="recipe">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }}>
            <h1>
              <Link to={`/recipes/${_id}`}>{ title }</Link>
            </h1>
          </div>
          <p>{ summary }</p>
          <ul>
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
          </ul>
        </header>
        <footer>
          <LikeButton onChange={this.toggleLike.bind(this)} liked={liked} />
        </footer>
      </article>
    )
  }
}

export default RecipeItem
