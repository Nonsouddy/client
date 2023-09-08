import { BiSolidSchool } from "react-icons/bi";
import SectionHead from "./SectionHead";
import {school} from '../data'
import Card from "../UI/Card";
import {Link} from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai';
import './school.css'

const School = () => {
  return (
   <section className="programs">
      <div className="container programs__container">
       <SectionHead icon={<BiSolidSchool/>} title='SCHOOLS'/>
      <div className="program__wrapper">
         {
            school.map(({id, avatar, title, info, path}) => {
                return (
                    <Card className='programs__program' key={id}>
                        <div className="school__avatar">
                            <img src={avatar} alt="img" />
                        </div>
                        {/* <span>{avatar}</span> */}
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

export default School;
