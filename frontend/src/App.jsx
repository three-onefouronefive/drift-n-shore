import { useState } from 'react'
// import { useScrollAnimations } from './hooks/useScrollAnimations'
// import { useTimeline } from './hooks/useTimeline'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/Navbar'
import { ReservationProvider } from './context/ReservationContext'
import Reservation from './pages/Reservation/Reservation'
import Amenities from './pages/Amenities/Amenities'
import Contact from './pages/Contact/Contact'
import Suites from './pages/Suites/Suites'

function App() {

    return (
        <div className='app'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suites" element={<Suites />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/dining" element={<div>Dining coming soon</div>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reserve" element={
                    <ReservationProvider>
                        <Reservation />
                    </ReservationProvider>
                } />
            </Routes>
        </div>
    )
}

export default App
