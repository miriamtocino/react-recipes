import React, { PureComponent } from 'react'
import RecipesContainer from './recipes/RecipesContainer'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    )
  }
}

export default App
