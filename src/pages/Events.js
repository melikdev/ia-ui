// hooks
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"

const Events = () => {
  const url = process.env.REACT_APP_API_URL + "/events?populate=*"
  const { data: events } = useFetch(url)

  return (
    <main className="container">
      <h1 style={{ textAlign: "center" }}>EVENTS</h1>
      {events.map((e) => (
        <article key={e.id}>
          <small>
            <ReactMarkdown children={e.attributes.events_info} />
          </small>
        </article>
      ))}
    </main>
  )
}

export default Events
