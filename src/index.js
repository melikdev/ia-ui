import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./assets/styles/globals.css"
import App from "./App"
import MainLayout from "../src/layouts/MainLayout"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <MainLayout>
      <App />
    </MainLayout>
  </BrowserRouter>
)
