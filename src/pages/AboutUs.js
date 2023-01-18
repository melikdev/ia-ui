import ReactMarkdown from "react-markdown"
import "../assets/styles/about-us.css"

// hooks
import useFetch from "../hooks/useFetch"

const AboutUs = () => {
  const url = process.env.REACT_APP_API_URL + "/about-uses?populate=*"
  const { data: about } = useFetch(url)

  return (
    <main className="container">
      {about.map((a) => (
        <article key={a.id}>
          <section style={{ textAlign: "center" }} className="header">
            <h2>{a.attributes.header}</h2>
          </section>
          <article className="grid vision">
            <small>
              <ReactMarkdown children={a.attributes.vision} />
            </small>
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                a.attributes.img3.data.attributes.url
              }
              alt=""
            />
          </article>
          <section></section>
          <article className="grid">
            <img
              height="400px"
              width="400px"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                a.attributes.img2.data.attributes.url
              }
              alt=""
            />
            <small>
              <ReactMarkdown children={a.attributes.purpose} />
            </small>
          </article>
          <section></section>
          <article className="grid">
            <small>
              <ReactMarkdown children={a.attributes.background} />
            </small>
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                a.attributes.img1.data.attributes.url
              }
              alt=""
            />
          </article>
          <article>
            <small>
              <ReactMarkdown children={a.attributes.background2} />
            </small>
          </article>
          <section></section>
          <article>
            <small>
              <ReactMarkdown children={a.attributes.plan} />
            </small>
          </article>
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
          <footer id="footnote">
            <small>
              <ReactMarkdown children={a.attributes.footnote} />
            </small>
          </footer>
        </article>
      ))}
    </main>
  )
}

export default AboutUs
