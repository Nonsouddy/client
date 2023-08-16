import Header from '../../components/Header';
import HeaderImage from '../../images/aboutus.jpg';
import StoryImage from '../../images/storyimage.jpg';
import VisionImage from '../../images/visionimage.jpg';
import MissionImage from '../../images/missionimage.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Repellendus, excepturi quod blanditiis nostrum aspernatur animi!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
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
    </>
  )
};

export default About;
