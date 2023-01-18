import { Route, Routes } from "react-router"
import Team from "./components/Team"

// pages
import AboutUs from "./pages/AboutUs"
import Events from "./pages/Events"
// import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Retreat from "./pages/Retreat"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/team" element={<Team />} />
        <Route path="/retreat" element={<Retreat />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
