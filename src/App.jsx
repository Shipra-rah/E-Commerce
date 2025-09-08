import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";

// Pages
import Home from "./Pages/Home";
import AllHome from "./Pages/AllHome";
import CartPage from "./Pages/CartPage";
import CardFullDetails from "./Data/CardFullDetails";
import LoginLayout from "./Pages/LoginLayout";
import About from "./Pages/About";
import CheckoutPage from "./Pages/CheckoutPage";
import Order from "./Pages/Order";
import OrderConfirmation from "./Pages/OrderConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}


function Layout() {
  const location = useLocation();

  const hideLayout =
    location.pathname.toLowerCase().startsWith("/login") ||
    location.pathname.toLowerCase().startsWith("/register");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:collection" element={<AllHome />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<CardFullDetails />} />
          <Route path="/login/*" element={<LoginLayout />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderConfirmation" element={<OrderConfirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default App;
