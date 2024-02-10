import './App.css'
import Layout from './pages/Layout'
import Home from './pages/general/Home'
import Contact from './pages/general/Contact'
import Resources from './pages/general/Resources'
import Products from './pages/general/Products'
import SignIn from './pages/general/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/resources' element={ <Resources /> }/>
          <Route path='/products' element={ <Products /> }/>
          <Route path='/sign_in' element={ <SignIn /> }/>
          {/* TODO: Other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
