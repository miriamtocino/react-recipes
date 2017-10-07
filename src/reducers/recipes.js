// import { TOGGLE_LIKE } from '../actions/recipes/toggle-like'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'
import { CREATE_RECIPE  } from '../actions/recipes/create'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [].concat(payload)

    case CREATE_RECIPE :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
