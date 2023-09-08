import Header from '../../components/Header';
import HeaderImage from '../../images/aboutus.jpg';
import StoryImage from '../../images/storyimage.jpg';
import VisionImage from '../../images/visionimage.jpg';
import MissionImage from '../../images/missionimage.jpg';
import GoToTop from '../../components/GoToTop';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      Torbita™ Computer Training School Abuja is a one stop
             computer training center for any kind of computer
              trainings!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story img" />
          </div>
          <div className="about__section-content">
            {/* <h2>Our Story</h2> */}
            <h1>Torbita™ Computer Training School Abuja</h1>
            <p>
            Torbita™ Computer Training School Abuja is a one stop
             computer training center for any kind of computer
              trainings like physical (On-Site) Computer Training,
               Online Computer Training, Kids Coding and Programming
                (physical and online) training, after school computer 
                training for school Children, One-on-One Computer Training,
                 VIP/Executive computer Training, Corporate Training and Human
                  Capital Development.
            </p>
            <p>
            Our computer trainings range from beginners’ computer courses to 
            intermediate computer courses to professional computer courses.
            We conduct 100% practical and hands-on training (physical and online)
             in a conducive, secured and serene environment for learning with professional
              and decent Instructors who are diligent in the discharge of their duties.
            </p>
            
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur, voluptatem adipisci iusto eum ea sint praesentium odio autem, 
              minima aut minus eaque at, enim beatae!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Delectus ea maiores quidem excepturi eum, 
              optio aperiam? Ut, perspiciatis modi. Doloribus reprehenderit
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="vision img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="mission img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur, voluptatem adipisci iusto eum ea sint praesentium odio autem, 
              minima aut minus eaque at, enim beatae!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Delectus ea maiores quidem excepturi eum, 
              optio aperiam? Ut, perspiciatis modi. Doloribus reprehenderit
            </p>
            <p>
            pariatur impedit sed! Minus itaque porro accusamus, dolores alias fugit recusandae,
            laudantium maiores omnis temporibus enim.
            </p>
          </div>
        </div>
      </section>
      <GoToTop/>
    </>
  )
};

export default About;
