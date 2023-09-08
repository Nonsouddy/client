import { FaUserGraduate } from "react-icons/fa";
import SectionHead from "../../components/SectionHead";
import { courses } from "../../data";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import GoToTop from "../../components/GoToTop";
import './courses.css';



const Courses = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaUserGraduate/>} title='Our Courses'/>
        <div className="programs__wrapper">
           {
            courses.map(({id, icon, title, info, path}) => {
              return (
                <Card className='programs__program' key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">REGISTER <AiFillCaretRight/></Link>
                </Card>
              )
            })
           }
        </div>
      </div>
      <GoToTop/>
    </section>
  )
};

export default Courses;
