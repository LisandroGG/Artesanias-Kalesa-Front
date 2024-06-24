import style from '../Navbar/Navbar.module.css'

const Navbar = () => {
    
    return(
        <div className={style.nav}>
            <ul>
                <li><a href='' className={style.title}>Artesanias Kalesa</a></li>
                <li><a href=''>Inicio</a></li>
                <li><a href=''>Sobre Mi</a></li>
                <li><a href='https://api.whatsapp.com/send?phone=+543472623570&text=%F0%9F%91%8BHola%20Kalesa,%20vengo%20de%20tu%20pagina%20web!!' target='_blank'>Contacto</a></li>
            </ul>
        </div>
    )
}

export default Navbar