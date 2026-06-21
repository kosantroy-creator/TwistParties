import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Twisting from "./pages/Twisting";
import Decor from "./pages/Decor";
import AddOns from "./pages/AddOns";
import Pricing from "./pages/Pricing";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import ServiceAreasIndex from "./pages/ServiceAreasIndex";
import ServiceArea from "./pages/ServiceArea";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/balloon-twisting" element={<Twisting />} />
          <Route path="/balloon-decor" element={<Decor />} />
          <Route path="/party-add-ons" element={<AddOns />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreasIndex />} />
          <Route path="/service-areas/:slug" element={<ServiceArea />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
