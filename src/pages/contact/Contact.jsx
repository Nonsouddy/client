import Header from '../../components/Header';
import HeaderImage1 from '../../images/contactus.jpg';
import { MdEmail } from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';




const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Mollitia, temporibus!
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@torbitalimited@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://m.me/#" target='_blank' rel='noreferrer noopener'><FaFacebookMessenger/></a>
            <a href="https://wa.me/+2348062751729" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
