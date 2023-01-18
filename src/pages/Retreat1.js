import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"

const Retreat1 = () => {
  const url = process.env.REACT_APP_API_URL + "/retreats?populate=*"
  const { data: retreat } = useFetch(url)

  return (
    <main className="container">
      <h1 style={{ textAlign: "center" }}>RETREAT</h1>
      {retreat.map((r) => (
        <article key={r.id}>
          <article>
            <section>
              <small>
                <ReactMarkdown children={r.attributes.intro_text} />
              </small>
              <small>
                <ReactMarkdown children={r.attributes.program} />
              </small>
              <small>
                <ReactMarkdown children={r.attributes.location_accommodation} />
              </small>
              <small>
                <ReactMarkdown children={r.attributes.registration_fees} />
              </small>
            </section>
          </article>
        </article>
      ))}
    </main>
  )
}

export default Retreat1
