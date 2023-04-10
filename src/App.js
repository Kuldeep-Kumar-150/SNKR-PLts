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
import Preloader from './components/Preloader';

function App() {
  return (
    <>
      <div className='d-flex flex-column vh_100_lg'>
        <MyNavBar />
        <Header />
      </div>
      <Preloader/>
      <BackToTop />
      <MainSection />
      <Reviews />
      <Products />
      <MyFooter />
    </>
  );
}

export default App;
