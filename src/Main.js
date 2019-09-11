import React from "react"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        margin: "auto"
      }}
    >
      Main Dash
      <Link to="/increment">Go to Incrementer</Link>
      <Link to="/decrement">Go to Decrementer</Link>
    </div>
  )
}

export default Main
