import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar container-fluid">
        <div className="contenedor-icono justify-content-center align-items-center">
          <img className="logo" src ='/images/icono-hamburguesa.png' alt="" />
          <div className="brand-name">
            <p className="nombre-1">MR <span className="nombre-2">Burgers</span></p>
          </div>
        </div>
        <div className="secciones d-flex justify-content-evenly">
          <a className="link" href="/">Home</a>
          <a className="link" href="/">Productos</a>
          <a className="link" href="/">Contacto</a>
        </div>
        <div className="d-flex justify-content-center">
          <CartWidget/>
        </div>
    </div>
  )
}   

export default NavBar;