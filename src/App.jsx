import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/general/Home'
import Contact from './pages/general/Contact'
import FAQ from './pages/general/FAQ'
import Resources from './pages/general/Resources'
import Products from './pages/general/Products'
import SignIn from './pages/general/SignIn'
import SignUp from './pages/general/SignUp'
import Overview from './pages/signed_in/Overview'
import Projects from './pages/signed_in/Projects'
import User from './pages/signed_in/User'
import Tasks from './pages/signed_in/Tasks'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/faq' element={ <FAQ /> }/>
          <Route path='/resources' element={ <Resources /> }/>
          <Route path='/products' element={ <Products /> }/>
          <Route path='/sign_in' element={ <SignIn /> }/>
          <Route path='/sign_up' element={ <SignUp /> }/>

          {/* TODO: Make sure that user is signed in to access these pages */}
          <Route path='/overview' element={ <Overview /> }/>
          <Route path='/user' element={ <User /> }/>
          <Route path='/projects' element={ <Projects /> }/>
          <Route path='/tasks' element={ <Tasks /> }/>

          {/* TODO: Other routes here */}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App