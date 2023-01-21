import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import useFetch from "../hooks/useFetch"
import { useState } from "react"
import "../assets/styles/gallery.scss"

// Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import CloseIcon from "@mui/icons-material/Close"

const Gallery = () => {
  const url = process.env.REACT_APP_API_URL + "/galleries?populate=*"
  const { data: gallery } = useFetch(url)

  const [toggleModal, setToggleModal] = useState(false)
  const [currentImg, setCurrentImg] = useState(null)
  const [currentIndex, setCurrentIndex] = useState([])
  const [currentSpiritual, setCurrentSpiritual] = useState(null)
  const [currentScientific, setCurrentScientific] = useState(null)

  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setToggleModal(false)
    }
  }

  const clickListener = (g, index) => {
    setToggleModal(true)
    setCurrentIndex(index)
    setCurrentImg(g.attributes.img.data.attributes.url)
    setCurrentSpiritual(g.attributes.spiritual_reflection)
    setCurrentScientific(g.attributes.scientific_description)
  }

  const nextImage = () => {
    setCurrentIndex(currentIndex + 1)
    setCurrentImg(gallery[currentIndex].attributes.img.data.attributes.url)
    setCurrentSpiritual(gallery[currentIndex].attributes.spiritual_reflection)
    setCurrentScientific(
      gallery[currentIndex].attributes.scientific_description
    )
    console.log(currentIndex)
  }

  const previousImage = () => {
    setCurrentIndex(currentIndex - 1)
    setCurrentImg(gallery[currentIndex].attributes.img.data.attributes.url)
    setCurrentSpiritual(gallery[currentIndex].attributes.spiritual_reflection)
    setCurrentScientific(
      gallery[currentIndex].attributes.scientific_description
    )
  }

  return (
    <>
      <main className="container gallery-container">
        <article className="gallery-wrapper">
          {gallery.map((g, index) => (
            <section className="single-img" key={g.id}>
              <img
                onClick={() => clickListener(g, index)}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  g.attributes.img.data.attributes.url
                }
                alt=""
              />
              {toggleModal && (
                <section onClick={handleClick} className="modal">
                  <section className="modal-wrapper">
                    <CloseIcon
                      style={{ fontSize: "20px" }}
                      className="close-icon"
                      onClick={() => setToggleModal(false)}
                    />
                    <div className="modal-img">
                      <div className="arrows">
                        {currentImg && (
                          <ArrowForwardIosIcon
                            className="next"
                            onClick={() => nextImage(index)}
                          />
                        )}
                        {currentIndex >= 0 && (
                          <ArrowBackIosIcon
                            className="prev"
                            onClick={() => previousImage(index)}
                          />
                        )}
                      </div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={process.env.REACT_APP_UPLOAD_URL + currentImg}
                      >
                        <img
                          src={process.env.REACT_APP_UPLOAD_URL + currentImg}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <small>
                        <ReactMarkdown children={currentScientific} />
                        <ReactMarkdown children={currentSpiritual} />
                      </small>
                    </div>
                  </section>
                </section>
              )}
            </section>
          ))}
        </article>
      </main>
    </>
  )
}

export default Gallery
