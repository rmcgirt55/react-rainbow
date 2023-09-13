import React, { useState } from "react"
// Make sure to import the component we just built:
import ColorBlock from "./Components/ColorBlock"
import ColorForm from "./Components/ColorForm"
import "./App.css"

function App() {
  let [colors, setColors] = useState([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
      <ColorForm addColor={addColor} />
    </div>
  )
}

export default App