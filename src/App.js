import { Route, Routes } from "react-router"
import Team from "./components/Team"

// pages
import AboutUs from "./pages/AboutUs"
// import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Retreat1 from "./pages/Retreat1"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/team" element={<Team />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/retreat" element={<Retreat1 />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
