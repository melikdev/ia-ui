import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "../assets/styles/retreat.scss"

const Retreat = () => {
  const url = process.env.REACT_APP_API_URL + "/retreats?populate=*"
  const { data: retreat, loading } = useFetch(url)

  return (
    <main className="container">
      <section>
        <h1 style={{ textAlign: "center" }}>RETREATS</h1>
        {loading ? (
          <article aria-busy="true"></article>
        ) : (
          <section className="retreat-wrapper grid">
            {retreat.map((r) => (
              <article key={r.id}>
                <Link to={`/retreat/${r.id}`}>
                  <h3>{r.attributes.retreat_name}</h3>
                  <small>Click for more information.</small>
                </Link>
              </article>
            ))}
          </section>
        )}
      </section>
    </main>
  )
}

export default Retreat
