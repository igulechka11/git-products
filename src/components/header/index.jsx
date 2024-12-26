import Navigator from "../navigator";

import './style.css';
const Header = () => {
    return ( 
        <div className="header">
            <h1>Выбор читателей</h1>
            <Navigator/>
        </div>
     );
}
 
export default Header;