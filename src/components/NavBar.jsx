import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar container-fluid">
      
        <div className="contenedor-icono justify-content-center align-items-center">
          <Link to='/' style={{textDecoration: "none"}}>
            <img className="logo" src ='/images/icono-hamburguesa.png' alt="" />
            <div className="brand-name">
              <p className="nombre-1">MR <span className="nombre-2">Burgers</span></p>
            </div>
          </Link>
        </div>
        <div className="secciones d-flex justify-content-evenly">
          <NavLink to="/" className={({isActive})=> isActive ? "link-activo": "link"}>Home</NavLink>
          <NavLink to="/categorys/Boxes" className={({isActive})=> isActive ? "link-activo": "link"}>Burger Boxes</NavLink>
          <NavLink to="/categorys/Salsas" className={({isActive})=> isActive ? "link-activo": "link"}>Salsas</NavLink>
          <NavLink to="/contacto" className={({isActive})=> isActive ? "link-activo": "link"}>Contacto</NavLink>
        </div>
        <div className="d-flex justify-content-center">
          <CartWidget/>
        </div>
    </div>
  )
}   

export default NavBar;