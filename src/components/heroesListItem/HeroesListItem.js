import { useState } from "react";
import { deleteHeroes } from "../../actions";
import { useDispatch } from "react-redux";
import {motion} from 'framer-motion'

const HeroesListItem = ({name, description, element,id}) => {
const dispatch = useDispatch()
    let elementClassName;
    const [isClosed,setIsClosed] = useState(false)
    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    const deleteHeroesHandlerFromStore = (id) => {
         setTimeout(() => {
             dispatch(deleteHeroes(id))
         },300)
         setIsClosed(!isClosed)
    }
    const variants = {
        initial: { transform:'scale(0.4) translateX(-100%)' },
        open : {transform:'scale(1) translateX(0%)', 
        transition:{
            duration:0.3
       }},
        closed: {transform:'scale(0.8) translateY(-50%)',opacity:0},
      }
    return (
        <motion.li
        initial = 'initial'
         animate = {isClosed ? 'closed' : 'open'}
         variants={variants}
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button onClick = {() => deleteHeroesHandlerFromStore(id)} type="button" className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </motion.li>
    )
}

export default HeroesListItem;