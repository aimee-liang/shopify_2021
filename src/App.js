import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Components/Home"

const App = props => {
  return(
    <>
    <Switch>
      <Route path ="/home" render={() => <Home/> } />
    </Switch>
    </>
  )
}
export default App;
