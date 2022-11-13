import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import GenerateLogin from './components/GenerateLogin'
import TOS from './components/TOS'
import PrivPol from './components/PrivPol'
import NavBar from './components/NavBar'


function App() {

  const fetchAccTok = () => {
    const query = new URLSearchParams({
      client_key: 'awqc9spoo1gfge2y',
      client_secret: '',
      scope: 'user.info.basic',
      next: 'http://127.0.0.1:5173/',
      state: 'key%3Dabc'
    })

    axios.get('https://open-api.tiktok.com/oauth/access_token/')
  }

  const isLoggedIn = false;



  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/">
            <Route index element={
              <GenerateLogin />
            } />

            <Route path="/tos" element={<TOS />} />
            <Route path="/privacy-policy" element={<PrivPol />} />
          </Route>


        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
