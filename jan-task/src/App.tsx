import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Layout from "./Layout"
import Login from "./pages/Login"
import Home from "./pages/Home"


const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
