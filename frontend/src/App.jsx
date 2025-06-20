import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import EventsPage from './pages/EventsPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import BiographyPage from './pages/BiographyPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/biography" element={<BiographyPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
