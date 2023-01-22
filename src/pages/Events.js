// hooks
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"

const Events = () => {
  const url = process.env.REACT_APP_API_URL + "/events?populate=*"
  const { data: events, loading } = useFetch(url)

  return (
    <main className="container">
      {loading ? (
        <article aria-busy="true"></article>
      ) : (
        <section className="events-wrapper">
          {events.map((e) => (
            <section key={e.id}>
              <h1 style={{ textAlign: "center" }}>{e.attributes.header}</h1>
              <article>
                <small>
                  <ReactMarkdown children={e.attributes.events_info} />
                </small>
              </article>
            </section>
          ))}
        </section>
      )}
    </main>
  )
}

export default Events
