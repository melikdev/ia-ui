import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"

const Retreat = () => {
  const url = process.env.REACT_APP_API_URL + "/retreats?populate=*"
  const { data: retreat } = useFetch(url)
  console.log(retreat)

  return (
    <main className="container">
      {retreat.map((r) => (
        <article key={r.id}>
          <h1 style={{ textAlign: "center" }}>{r.attributes.header}</h1>
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

export default Retreat
