import React from "react"
import CVPositionMap from './components/cv-position-map'
import { HashRouter as Router, Route } from 'react-router-dom'
import "./App.scss"

function App(props) {
  return (
    <main-app-element>
    <div className="App">
      <Router>
        <CVPositionMap />
      </Router>
    </div>
    </main-app-element>
  )
}

export default App