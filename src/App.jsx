import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import CardFullDetails from "./Data/CardFullDetails";
import LoginLayout from "./Pages/LoginLayout";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();

  // hide navbar/footer on login/register
  const hideLayout =
    location.pathname.toLowerCase().startsWith("/login") ||
    location.pathname.toLowerCase().startsWith("/register");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/product/:id" element={<CardFullDetails />} />
        <Route path="/login/*" element={<LoginLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<div>Register Page</div>} />

        {/* fallback route to handle unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
