import "./App.css"
import  Pages  from "./pages/Pages"
import Loader from './components/Loader'
import { useState, useEffect } from "react"
//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  const [isLoading, setIsLoading]=useState(true);
  setTimeout(()=>{
    setIsLoading(false);
  },5000)
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      {isLoading ? <Loader />:<Pages />}
    </>
  )
}

export default App;
