import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

// Service Pages
import ACInstallation from './pages/services/ACInstallation'
import ACMaintenance from './pages/services/ACMaintenance'
import ACRepair from './pages/services/ACRepair'
import AMCServices from './pages/services/AMCServices'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ac-installation" element={<ACInstallation />} />
          <Route path="/services/ac-maintenance" element={<ACMaintenance />} />
          <Route path="/services/ac-repair" element={<ACRepair />} />
          <Route path="/services/amc-services" element={<AMCServices />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
