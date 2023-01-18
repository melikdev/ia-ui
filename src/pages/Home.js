import { Link } from "react-router-dom"
import "../assets/styles/home.css"

const Home = () => {
  return (
    <main className="home ">
      <section className="home-wrapper">
        <h1>ISLAMIC AGROECOLOGY</h1>
        <Link role="button" to="/about-us">
          About Us
        </Link>
        <p>
          Advancing the admiration and understanding of Allah’s creation in
          relation to natural order, agricultural production and food.
        </p>
      </section>
    </main>
  )
}

export default Home
