
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Contact from './components/Contact'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import OurDream from './components/OurDream'
import Services from './components/Service'
import WhyChooseUs from './components/WhyChooseUs'
import TermsConditions from './components/TermsConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import HomePage from './Pages/HomePage'
import ScrollToTop from './components/ScrollToTop'



function App() {
  

  return (
    <>


    <ScrollToTop/>
    
    <Navbar/>
 

     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/why-choose-us' element={<WhyChooseUs/>} />
      <Route path='/our-dream' element={<OurDream/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />

      <Route path='/termsconditions' element={<TermsConditions/>} />
      <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
     </Routes>
     <Footer/>

    </>
  )
}

export default App
