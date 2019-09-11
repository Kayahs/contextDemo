import React, { useContext } from "react"
import { ValueContext } from "./contexts"

const Controls = ({ change }) => {
  const { value, setValue } = useContext(ValueContext)
  return (
    <button
      style={{
        height: "50px",
        width: "50%",
        fontSize: "30px",
        textAlign: "center",
        margin: "auto"
      }}
      onClick={() => setValue(value + change)}
    >
      {change}
    </button>
  )
}

export default Controls
