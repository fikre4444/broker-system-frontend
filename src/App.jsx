import Homepage from "./pages/Homepage"
import Layout from "./HOCS/Layout"
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"

function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
