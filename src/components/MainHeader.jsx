
import {Link} from 'react-router-dom';
import Image from '../images/trainer6.jpg';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header_container">
        <div className="main__header_left">
          <h4>Learn A Tech Skill Today</h4>
          <h1>Welcome To Torbita Computer Training School</h1>
          <p>
          Torbita™ Computer Training School Abuja is a one stop
             computer training center for any kind of computer
              trainings. <p><h4>Get started today!</h4></p>
          </p>
          <Link to='/courses' className='btn lg'>Apply Now</Link>
        </div>
        <div className="main__header_right">
          <div className="main__header_circle"></div>
          <div className="main__header_image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
