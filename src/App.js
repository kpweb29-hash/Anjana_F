import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopRoute from './components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ProductList from './admin/products/ProductList'
import Login from './admin/Login'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/AdminDashboard'
import AddProduct from './admin/products/AddProduct'
import EditProduct from './admin/products/EditProduct'
import BlogList from './admin/blog/BlogList'
import AddBlog from './admin/blog/AddBlog'
import Industries from './pages/Industries';
import Updates from './pages/Updates';
import SubCategories from './components/SubCategories';
import ProductDetail from './components/ProductDetail';
import AllProductList from './components/AllProductList';
import EditBlog from './admin/blog/Edit-blog';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (<>
    <ScrollToTopRoute />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/industries' element={<Industries />} />
      <Route path='/updates' element={<Updates />} />
      <Route path='/contact' element={<Contact />} />

      <Route path="/products/:category" element={<SubCategories />} />
      <Route path="/products/:category/:subcat" element={<AllProductList />} />
      <Route path="/products/:category/:subcat/:productId" element={<ProductDetail />} />

      <Route path="login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>

        {/* DEFAULT ADMIN PAGE */}
        <Route index element={<AdminDashboard />} />


        {/* PRODUCT ROUTES */}
        <Route path="productlist" element={<ProductList />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="edit-product/:id" element={<EditProduct />} />

        <Route path="BlogList" element={<BlogList />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="edit-blog/:id" element={<EditBlog />} />

      </Route>

    </Routes>
    <Footer />

  </>
  );
}

export default App;
