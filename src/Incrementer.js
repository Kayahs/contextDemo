import React from "react"
import Controls from "./Controls"
import ValueDisplay from "./ValueDisplay"

const Incrementer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "50px"
      }}
    >
      Incrementer
      <Controls change={1} />
      <ValueDisplay />
    </div>
  )
}

export default Incrementer
