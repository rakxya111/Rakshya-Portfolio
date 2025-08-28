import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import NotFound from "./assets/Pages/NotFound"
import { ToastProvider } from "./hooks/use-toast.jsx"
import { Toaster } from "./assets/Components/ui/Toaster"

function App() {
  return (
    <ToastProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
