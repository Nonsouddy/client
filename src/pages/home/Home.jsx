import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader';
import Schools from '../../components/Schools';
import School from '../../components/School';
// import Footer from '../../components/footer'
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import GoToTop from '../../components/GoToTop';
import './home.css';

const Home = () => {
  return (
    <>
   <MainHeader/>
   <Schools/>
   <School/>
   <Values/>
   {/* <FAQs/> */}
   <Testimonials/>
   {/* <Footer/> */}
   <GoToTop/>
   </>
  );
};

export default Home;

