// libraries
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

// hooks
import useFetch from "../../hooks/useFetch"

const AboutUs = () => {
  const url = process.env.REACT_APP_API_URL + "/about-uses"
  const { data: about } = useFetch(url)

  const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    gap: 30px;

    hr {
      width: 100%;
      border: 1px solid teal;
    }
  `

  const Header = styled.header`
    display: flex;
    justify-content: center;

    h1 {
      font-size: 30px;
    }
  `
  const Vision = styled.article`
    display: flex;
    gap: 50px;

    article {
      display: flex;
      flex-direction: column;
    }

    img {
      height: 500px;
      width: 400px;
    }
  `
  const Purpose = styled.article`
    display: flex;
    gap: 50px;

    article {
      display: flex;
      flex-direction: column;
    }
    img {
      height: 500px;
      width: 500px;
    }
  `
  const Background = styled.article`
    display: flex;
    gap: 50px;

    article {
      display: flex;
      flex-direction: column;
    }
    img {
      height: 500px;
      width: 500px;
    }
  `
  const Background2 = styled.article`
    display: flex;
    gap: 50px;

    article {
      display: flex;
      flex-direction: column;
    }
  `
  const Plan = styled.article``
  const FootNote = styled.article``

  return (
    <>
      {about.map((a) => (
        <main key={a.id} className="about-us">
          <Container>
            <Wrapper>
              <Header>
                <h1>{a.attributes.header}</h1>
              </Header>
              <Vision>
                <article>
                  <ReactMarkdown children={a.attributes.vision} />
                </article>
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    a.attributes.img1.data.attributes.url
                  }
                  alt=""
                />
              </Vision>
              <Purpose>
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    a.attributes.img2.data.attributes.url
                  }
                  alt=""
                />
                <article>
                  <ReactMarkdown children={a.attributes.purpose} />
                </article>
              </Purpose>
              <Background>
                <article>
                  <ReactMarkdown children={a.attributes.background} />
                </article>
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    a.attributes.img3.data.attributes.url
                  }
                  alt=""
                />
              </Background>
              <Background2>
                <article>
                  <ReactMarkdown children={a.attributes.background2} />
                </article>
              </Background2>
              <Plan>
                <ReactMarkdown children={a.attributes.setup} />
              </Plan>
              <hr />
              <FootNote>
                <ReactMarkdown children={a.attributes.footnote} />
              </FootNote>
            </Wrapper>
          </Container>
        </main>
      ))}
    </>
  )
}

export default AboutUs
