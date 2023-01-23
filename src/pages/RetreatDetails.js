import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useParams } from "react-router"

import useFetch from "../hooks/useFetch"

const RetreatDetails = () => {
  const id = useParams().id
  const url = process.env.REACT_APP_API_URL + `/retreats/${id}`
  const { data: retreat, loading } = useFetch(url)

  return (
    <main className="container">
      <section key={retreat.id}>
        <article style={{ padding: "100px" }}>
          <h2 style={{ textAlign: "center" }}>
            {retreat?.attributes?.retreat_name}
          </h2>
          <small>
            <ReactMarkdown children={retreat?.attributes?.retreat_details} />
          </small>
        </article>
      </section>
    </main>
  )
}

export default RetreatDetails
