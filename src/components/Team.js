import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import useFetch from "../hooks/useFetch"

const Team = () => {
  const url = process.env.REACT_APP_API_URL + "/about-uses?populate=*"
  const { data: about } = useFetch(url)

  return (
    <main className="container">
      {about.map((a) => (
        <section key={a.id}>
          <h1 style={{ textAlign: "center" }}>TEAM</h1>
          <section className="team grid">
            <article className="harun">
              <img
                width="200px"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  a.attributes.harun_cicek_img.data.attributes.url
                }
                alt=""
              />
              <small>
                <ReactMarkdown children={a.attributes.harun_cicek} />
              </small>
            </article>
            <article className="ghezal">
              <img
                width="200px"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  a.attributes.ghezal_sabir_img.data.attributes.url
                }
                alt=""
              />
              <small>
                <ReactMarkdown children={a.attributes.ghezal_sabir} />
              </small>
            </article>
          </section>
        </section>
      ))}
    </main>
  )
}

export default Team
