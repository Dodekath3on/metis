import './App.css'
import Layout from './pages/Layout'
import Home from './pages/general/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> }/>
          {/* TODO: Other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
