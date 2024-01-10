import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import ProtectedRoute from "./protectedRoute";
import Home from "../pages/home/Home";
import User from "../pages/user/User";
import Category from "../pages/category/Category";
import SubCategory from "../pages/subcategory/SubCategory";
import Product from "../pages/product/Product";
import AddUser from "../pages/user/AddUser";
const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/category" element={<Category />} />
          <Route path="/subcategory" element={<SubCategory />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
