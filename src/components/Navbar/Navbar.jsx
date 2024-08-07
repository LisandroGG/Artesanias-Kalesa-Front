import style from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return(
        <div className={style.nav}>
            <ul>
                <li><Link to={'/admin'} className={style.title}>Artesanias Kalesa</Link></li>
                <div className={style.btns}>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to ={'/about'}>Sobre mi</Link></li>
                <li><a href='https://api.whatsapp.com/send?phone=+543472611331&text=%F0%9F%91%8BHola%20Kalesa,%20vengo%20de%20tu%20pagina%20web!!' target='_blank'>Contactame</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar