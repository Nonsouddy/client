import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import {schools} from '../data'
import Card from "../UI/Card";
import {Link} from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai';
import "../components/schools.css"

const Schools = () => {
  return (
   <section className="program">
      <div className="container programs__container">
       <SectionHead icon={<FaCrown/>} title='IN-DEMAND COURSES'/>
      <div className="programs__wrapper">
         {
            schools.map(({id, icon, title, info, path}) => {
                return (
                    <Card className='programs__program' key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                    </Card>
                )
            })
         }
      </div>
      </div>
   </section>
  );
};

export default Schools;
