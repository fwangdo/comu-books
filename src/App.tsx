import { type IReactProp } from './types/basic'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';  
import './App.css'
import './index.css' 

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
    <Header />
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
