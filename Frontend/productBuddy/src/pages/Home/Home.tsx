import Faq from "../../components/Dashboard/FAQ"
import { Footer } from "../../components/Dashboard/Footer"
import Hero from "../../components/Dashboard/Hero"
import Navbar from "../../components/Dashboard/Navbar"

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
   
      <Faq />
      <Footer/>
    </>
  )
}

export default Home
