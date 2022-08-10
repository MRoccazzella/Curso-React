import './form.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'

const Formulario = () => {
    const {cart, total, eliminarAll} = useContext(CartContext)
    let newDate = new Date()
    const mySwal = withReactContent(Swal)
    const createOrder =(e) => {
        

        const db = getFirestore()
        const orderCollectionQuery = collection(db,'orders')
        const order = {
            buyer: {nombre: document.getElementById('firstname').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value
                },
            items: cart.map((product) => ({id: product.id, nombre: product.nombre, precio: product.precio})),
            date: String(newDate.getDate()).padStart(2, '0') + '/' + String(newDate.getMonth() + 1).padStart(2, '0') + '/' + newDate.getFullYear(),
            total: total()
        }
        addDoc(orderCollectionQuery,order).then((res) =>{
            
            mySwal.fire({
                icon: 'success',
                text: `Compra Finalizada! Su numero de orden es ${res.id}`,
            })
            eliminarAll()
        }).catch((err) => {
            console.log(err)
        })
    }
    const chequeoCorreo = () => {
        if(document.getElementById('email').value !== document.getElementById('emailConfirmacion').value){
            mySwal.fire({
                icon: 'error',
                text: `los correos no coinciden`
            })
        }else{
            return createOrder()
        }   
    }
  return (
    <div className="formContainer">
        <div className="form">
      <div className="title">Concreta tu compra!</div>
      <div className="subtitle">ingresa tus datos</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder="Nombre" />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Email" />
        <div className="cut"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="emailConfirmacion" class="input" type="text" placeholder="Confirme su email" />
        <div className="cut"></div>
        <label for="emailConfirmacion" className="placeholder">Confirme su email</label>
      </div>
      <div className="input-container ic2">
        <input id="phone" className="input" type="text" placeholder="Phone" />
        <div className="cut cut-short"></div>
        <label for="phone" className="placeholder">Phone</label>
      </div>
        <Link to='/'>
            <button onClick={chequeoCorreo} type="text" className="submit">Comprar</button>
        </Link>
      </div>

    </div>
  )
}
export default Formulario