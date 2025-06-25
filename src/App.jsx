import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load all pages
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const About = lazy(() => import("./pages/About/About"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Franchise = lazy(() => import("./pages/Franchise/Franchise"));
const Careers = lazy(() => import("./pages/Careers/Careers"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        } />
        <Route path="about" element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        } />
        <Route path="gallery" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Gallery />
          </Suspense>
        } />
        <Route path="careers" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Careers />
          </Suspense>
        } />
        <Route path="blogs" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Blogs />
          </Suspense>
        } />
        <Route path="franchise" element={
          <Suspense fallback={<LoadingSpinner />}>
            <Franchise />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
