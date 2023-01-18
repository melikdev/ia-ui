import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import styled from "styled-components"
import useFetch from "../hooks/useFetch"

const Retreat = () => {
  const url = process.env.REACT_APP_API_URL + "/retreats?populate=*"
  const { data: retreat } = useFetch(url)
  console.log(retreat)

  const Container = styled.main`
    display: flex;
    justify-content: center;
    padding: 50px;
  `
  const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1024px;
  `
  const Retreat = styled.main`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `
  const Header = styled.h1`
    text-align: center;
  `
  const Intro = styled.section``
  const Program = styled.section``
  const Location = styled.section``
  const Registration = styled.section``

  return (
    <Container>
      <Wrapper>
        {retreat.map((r) => (
          <Retreat key={r.id}>
            <Header>{r.attributes.header}</Header>
            <Intro>
              <ReactMarkdown children={r.attributes.intro_text} />
            </Intro>
            <Program>
              <ReactMarkdown children={r.attributes.program} />
            </Program>
            <Location>
              <ReactMarkdown children={r.attributes.location_accommodation} />
            </Location>
            <Registration>
              <ReactMarkdown children={r.attributes.registration_fees} />
            </Registration>
          </Retreat>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Retreat
