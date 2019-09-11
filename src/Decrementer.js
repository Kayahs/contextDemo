import React from "react"
import Controls from "./Controls"
import ValueDisplay from "./ValueDisplay"

const Decrementer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "50px"
      }}
    >
      Decrementer
      <Controls change={-1} />
      <ValueDisplay />
    </div>
  )
}

export default Decrementer
