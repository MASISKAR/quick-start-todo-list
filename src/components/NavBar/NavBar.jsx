import { memo } from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink, /* Nav */ } from "react-router-dom";
import styles from './navBar.module.css';
import {useSelector} from 'react-redux';


const activeLinkClassName = ({isActive}) =>{
  const classes = ['nav-link'];

  if(isActive){
    classes.push(styles.active);
  }
 return classes.join(' ');
};

function NavBar() {
const count  = useSelector((store)=>store.counter.value);

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <NavLink to="/" className={({isActive})=> `${activeLinkClassName({isActive})} navbar-brand`}>Home</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink to="/about" className={activeLinkClassName}>About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/contact" className={activeLinkClassName}>Contact us</NavLink>
          <h1>Conut: {count}</h1>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
    
  );
}

export default memo(NavBar);
