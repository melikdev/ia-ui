import axios from "axios"
import React, { useEffect, useState } from "react"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/homes", {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        })
        setData(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      {data.map((d) => (
        <div key={d.id}>{d.attributes.header}</div>
      ))}
    </div>
  )
}

export default App
