import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"
import Open from "./components/Open"
import Login from "./components/Login"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="scroll_status"><Navbar />
      <Hero />
      <About />
      <Services/>
      <Footer/></div>
    },
    {
      path: "/open_ac",
      element: <><Navbar/><Open /><Footer/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}
 
export default App
