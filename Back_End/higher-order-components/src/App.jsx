import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form"
import Layout from "./Layout";
import Button from "./components/Button";


// const NewButton = Button;

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Button />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

