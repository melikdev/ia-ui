import ReactMarkdown from "react-markdown"
import "../assets/styles/about-us.scss"

// components
import Team from "../components/Team"

// hooks
import useFetch from "../hooks/useFetch"

const AboutUs = () => {
  const url = process.env.REACT_APP_API_URL + "/about-uses?populate=*"
  const { data: about, loading } = useFetch(url)

  return (
    <main className="container">
      {loading ? (
        <article aria-busy="true"></article>
      ) : (
        <section className="about-wrapper">
          {about.map((a) => (
            <section key={a.id}>
              <h2 style={{ textAlign: "center" }}>{a.attributes.header}</h2>
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
              <Team />
              <footer id="footnote">
                <small>
                  <ReactMarkdown children={a.attributes.footnote} />
                </small>
              </footer>
            </section>
          ))}
        </section>
      )}
    </main>
  )
}

export default AboutUs
