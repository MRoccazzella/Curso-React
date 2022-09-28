import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";
import logo from '../images/icono-hamburguesa.png'

const NavBar = () => {
  return (
    <div className="navbar container-fluid">
      
        <div className="contenedor-icono justify-content-center align-items-center">
          <Link to='/Curso-React' style={{textDecoration: "none"}}>
            <img className="logo" src ={logo} alt="logo" />
            <div className="brand-name">
              <p className="nombre-1">MR <span className="nombre-2">Burgers</span></p>
            </div>
          </Link>
        </div>
        <div className="secciones d-flex justify-content-evenly">
          <NavLink to="/Curso-React" className={({isActive})=> isActive ? "link-activo": "link"}>Home</NavLink>
          <NavLink to="/categorys/Boxes" className={({isActive})=> isActive ? "link-activo": "link"}>Burger Boxes</NavLink>
          <NavLink to="/categorys/Salsas" className={({isActive})=> isActive ? "link-activo": "link"}>Salsas</NavLink>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/carrito"><CartWidget/></Link>
        </div>
    </div>
  )
}   

export default NavBar;