import { Link } from 'react-router-dom';
import Logo from '../images/torbitalogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';




const footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
            <Link to='/' className='logo'>
                <img src={Logo} alt="footer logo" />
            </Link>
            <p>
            Second Floor, Infinity Trust House, 11 Kaura Namoda, Off Faskari Crescent, Area 3, Garki, Abuja.
            </p>
            <p>
              Tel:
              <a href="tel:+234 806 2751 729">+234 806 2751 729</a>
            </p>
            <div className="footer__socials">
                <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /> 
                </a>
                <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebook /> 
                </a>
                <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /> 
                </a>
                <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram /> 
                </a>
            </div>
        </article>
        <article>
            <h4>permalinks</h4>
            <Link to='/about'>About</Link>
            <Link to='/tuition'>Tuition</Link>
            <Link to='/tutors'>Tutors</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
        </article>
        <article>
            <h4>Courses</h4>
            <Link to='/about'>Programming</Link>
            <Link to='/tuition'>Web Development</Link>
            <Link to='/tutors'>Mobile App Develoment</Link>
            <Link to='/gallery'>Software Engineering</Link>
            <Link to='/contact'>ICT Fundamentals</Link>
            <Link to='/contact'>Networking</Link>
            <Link to='/contact'>Database Management</Link>
            <Link to='/contact'>Data Science And Data Analytics</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/tuition'>Privacy And Policy</Link>
            <Link to='/faqs'>FAQS</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 TORBITA COMPUTER TRAINING SCHOOL &copy; All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default footer;
