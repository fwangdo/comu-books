import { type IReactProp } from './types/basic'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function Frame( { children }: IReactProp ) {
  return (
    <div>
      {children}
    </div>
  )
} 

function Main() {
  return (
  <Frame>

  </Frame>)
}

function App() {

  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App
