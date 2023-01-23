import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import "../assets/styles/team.scss"

import useFetch from "../hooks/useFetch"

const Team = () => {
  const url = process.env.REACT_APP_API_URL + "/teams?populate=*"
  const { data: team } = useFetch(url)
  console.log(team)

  return (
    <main className="container">
      <section className="grid team">
        {team.map((t) => (
          <article className="member" key={t.id}>
            <img
              width="200px"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                t.attributes.member_img.data.attributes.url
              }
              alt=""
            />
            <section className="desc">
              <h2>
                <ReactMarkdown children={t.attributes.member_name} />
              </h2>
              <small>
                <ReactMarkdown children={t.attributes.member_description} />
              </small>
            </section>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Team
