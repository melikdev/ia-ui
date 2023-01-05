import { Route, Routes } from "react-router"

// pages
import AboutUs from "./pages/AboutUs/AboutUs"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
