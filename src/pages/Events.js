// hooks
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"

const Events = () => {
  const url = process.env.REACT_APP_API_URL + "/events?populate=*"
  const { data: events } = useFetch(url)

  return (
    <main className="container">
      {events.map((e) => (
        <article key={e.id}>
          <h1 style={{ textAlign: "center" }}>{e.attributes.header}</h1>
          <article>
            <small>
              <ReactMarkdown children={e.attributes.events_info} />
            </small>
          </article>
        </article>
      ))}
    </main>
  )
}

export default Events
