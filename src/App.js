import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import Nominees from "./Components/Nominees"

const App = props => {
  return(
    <>
    <Switch>
      <Route path ="/home" render={() => <Home/> } />
      <Route path ="/nominees" render={()=> <Nominees/>} />
    </Switch>
    </>
  )
}
export default App;
