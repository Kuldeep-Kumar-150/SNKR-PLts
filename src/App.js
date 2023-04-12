import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MyNavBar from './components/MyNavBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Products from './components/Products';
import MyFooter from './components/MyFooter';
import Reviews from './components/Reviews';
import BackToTop from './components/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  return (
    <>
      <MyNavBar />
      <Header />
      <Preloader />
      <BackToTop />
      <MainSection />
      <Reviews />
      <Products />
      <MyFooter />
    </>
  );
}

export default App;
