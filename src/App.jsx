import Homepage from "./pages/Homepage"
import Layout from "./HOCS/Layout"
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Contact from "./pages/Contact"
import ForgotPassword from "./pages/ForgotPassword"
import UserDashboard from "./pages/UserDashboard"
import OAuth2LoginHandler from "./pages/OAuth2LoginHandler"

function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/handleRedirectLogin" element={<OAuth2LoginHandler />} />
          <Route path="user-dashboard" element={<UserDashboard />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
