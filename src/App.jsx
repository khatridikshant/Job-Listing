import { useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import Search from './Components/SearchDiv/Search'
import Job from './Components/JobDiv/Job'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Search/>
     <Job/>
     <Value/>
     <Footer/>
    </>
  )
}

export default App
