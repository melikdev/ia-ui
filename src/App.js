import { Route, Routes } from "react-router"
import Team from "./components/Team"

// pages
import AboutUs from "./pages/AboutUs"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Retreat from "./pages/Retreat"
import ContactPage from "./pages/ContactPage"
import RetreatDetails from "./pages/RetreatDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/team" element={<Team />} />
        <Route path="/retreat" element={<Retreat />} />
        <Route path="/retreat/:id" element={<RetreatDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
