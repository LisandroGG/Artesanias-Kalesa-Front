import style from '../Footer/Footer.module.css'

const Footer = () => {
    
    return(
        <div className={style.footer}>
            <div className={style.content}>
            <p>© 2024 <span>Artesanias Kalesa</span> <br></br> <a href="https://lisandrodev.vercel.app/">Diseño web <span>Lisandro Pereyra</span></a></p>
            </div>

        </div>
    )
}

export default Footer