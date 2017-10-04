import React, { PureComponent } from 'react'
import RecipesContainer from './recipes/RecipesContainer'

class App extends PureComponent {
  updateRecipe(id, updatedAttributes) {
  }

  render() {
    return (
      <div className="app">
        <RecipesContainer
          updateRecipe={ this.updateRecipe.bind(this) } />
      </div>
    )
  }
}

export default App
