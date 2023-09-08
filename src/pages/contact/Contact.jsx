import Header from '../../components/Header';
import HeaderImage1 from '../../images/contactus.jpg';
import { MdEmail } from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import GoToTop from '../../components/GoToTop';
import { Googlemap, useJsApiLoader } from "@react-google-maps/api"
import './contact.css';




const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage1}>
        Want to start a Digital Career Today? Get in Touch with Us!
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@torbitalimited@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://m.me/#" target='_blank' rel='noreferrer noopener'><FaFacebookMessenger/></a>
            <a href="https://wa.me/+2348062751729" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>

        </div>
       <div className="google__map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.3777697254063!2d7.473767599999999!3d9.0292611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba3585f950f%3A0x99e45d2b066c8128!2sTorbita%20Computer%20Training%20School%20Abuja!5e0!3m2!1sen!2sng!4v1693594772317!5m2!1sen!2sng" width="1200" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map"></iframe>

       </div>
      </section>
      <GoToTop/>
    </>
  );
};

export default Contact;
