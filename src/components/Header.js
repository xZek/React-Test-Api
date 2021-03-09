import React from 'react';
import { NavLink }  from 'react-router-dom';
import  {navMenu} from './DummyData';



const Header = () =>{

    return(

        <React.Fragment>
            <h1>Page Title</h1>
        <div className="nav-link">
            {navMenu.map(menu =>(
                <NavLink key={menu.id} to={"./" + menu.location} activeClassName="active">{menu.title}</NavLink>
            ))}
        </div>
        </React.Fragment>


    );

}
export default Header
