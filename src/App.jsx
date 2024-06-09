 import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import FooterMenu from './components/FooterMenu'
import HomePage from './pages/HomePages/HomePage'
import CollectionPage from './pages/CollectionPage/CollectionPage'
import AboutAUSPage from './pages/AboutUS/AboutUSPage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
 
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/collection' element={<CollectionPage/>}/>
          <Route path='/about' element={<AboutAUSPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      <FooterMenu/>
      
    </>
  )
}

export default App
