import { useRef, useState } from "react"
import "../assets/styles/contact-page.scss"
import emailjs from "@emailjs/browser"

const ContactPage = () => {
  const formRef = useRef()
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ht3slwu",
        "template_ujd4s9x",
        formRef.current,
        "04AjPQr3r7qbPrPrN"
      )
      .then(
        (result) => {
          console.log(result.text)
          setIsSent(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <main className="container">
      <article className="contact-wrapper">
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <label>YOUR FIRST NAME:</label>
          <input
            required
            type="text"
            placeholder="First name"
            name="first_name"
          />
          <label>YOUR LAST NAME:</label>
          <input
            required
            type="text"
            placeholder="Last name"
            name="last_name"
          />
          <label>YOUR EMAIL:</label>
          <input required type="email" placeholder="Email" name="user_email" />
          <label>YOUR MESSAGE:</label>
          <textarea
            required
            type="text"
            row="5"
            placeholder="You can add your message here."
            name="message"
          />
          <input className="btn" type="submit" value="Send" />
        </form>
        {isSent && (
          <div className="contact-alert">
            <div className="alert-text">
              Your message has been sent. Thank you.
            </div>
          </div>
        )}
      </article>
    </main>
  )
}

export default ContactPage
