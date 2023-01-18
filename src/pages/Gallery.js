import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import styled from "styled-components"
import useFetch from "../hooks/useFetch"

const Gallery = () => {
  const url = process.env.REACT_APP_API_URL + "/galleries?populate=*"
  const { data: gallery } = useFetch(url)
  console.log(gallery)

  return (
    <>
      <div className="container">
        <article>
          <header>lorem</header>
        </article>
      </div>
    </>
  )
}

export default Gallery
