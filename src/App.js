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
import GalleryList from './admin/gallery/GalleryList'
import AddGallery from './admin/gallery/AddGallery'
import Industries from './pages/Industries';
import Updates from './pages/Updates';

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

      <Route path="login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>

            {/* DEFAULT ADMIN PAGE */}
            <Route index element={<AdminDashboard />} />


            {/* PRODUCT ROUTES */}
            <Route path="productlist" element={<ProductList />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

            <Route path="gallerylist" element={<GalleryList />} />
            <Route path="add-gallery" element={<AddGallery />} />

          </Route>

    </Routes>
    <Footer />

  </>
  );
}

export default App;
