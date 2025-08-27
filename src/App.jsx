import { BrowserRouter, Route,  Routes } from "react-router-dom"
import NotFound from "./assets/Pages/NotFound"
import Home from "./assets/Pages/Home"

function App() {
  
  return (
  <>

  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  </>
  )
}

export default App
