import LoginPage from './component/LoginPage'
import Receipe from './component/Receipe'
import { NewContext } from './context/NewContext'

const App = () => {
  return (
    <>
      <NewContext>
        <LoginPage />
      </NewContext>
      <Receipe />

    </>
  )
}

export default App