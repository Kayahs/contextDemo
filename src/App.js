import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import "./App.css"
import Main from "./Main"
import Incrementer from "./Incrementer"
import Decrementer from "./Decrementer"
import { ValueContext } from "./contexts"

const App = () => {
  const [value, setValue] = useState(0)
  return (
    <ValueContext.Provider value={{ value, setValue }}>
      <Router>
        <Route path="/" component={Main} />
        <Route path="/increment" exact component={Incrementer} />
        <Route path="/decrement" exact component={Decrementer} />
      </Router>
    </ValueContext.Provider>
  )
}

export default App
