import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import MenProductDetailsPage from "./Pages/Men_product";
import Women_page from "./Pages/Women_Page"
import Men_page from "./Pages/Men_page";
import Combos from "./Pages/Combos";
import Joggers from "./Pages/Joggers";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./components/LoginForm";




function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/products/:productId" element={<ProtectedRoute element={<MenProductDetailsPage/>}/>} />
          <Route path="/women" element={<Women_page/>} />
          <Route path="/men" element={<Men_page/>} />
          <Route path="/combos" element={<Combos/>} />
          <Route path="/joggers" element={<Joggers/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
     </Router>
    </>
  );
}

export default App;
