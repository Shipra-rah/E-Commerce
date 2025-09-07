import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import CardFullDetails from "./Data/CardFullDetails";
import LoginLayout from "./Pages/LoginLayout";
import About from "./Pages/About";
import CheckoutPage from "./Pages/CheckoutPage";
import Order from "./Pages/Order"
import OrderConfirmation from "./Pages/OrderConfirmationPage";

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
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
