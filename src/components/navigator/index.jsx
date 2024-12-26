import './style.css';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
    return ( 
        <ul className='nav'>
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">products</NavLink> </li>
            <li><NavLink to="/createProduct">forma</NavLink></li>
        </ul>
        
     );
}
 
export default Navigator;