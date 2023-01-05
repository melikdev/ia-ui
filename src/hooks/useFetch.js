import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
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
  }, [url])

  return { data }
}

export default useFetch
