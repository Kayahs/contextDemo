import React, { useContext } from "react"
import { ValueContext } from "./contexts"

const ValueDisplay = () => {
  const { value } = useContext(ValueContext)
  return <div style={{ fontSize: "40px" }}>{value}</div>
}

export default ValueDisplay
