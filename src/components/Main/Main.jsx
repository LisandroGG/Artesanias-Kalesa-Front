import style from '../Main/Main.module.css'
import Navbar from '../Navbar/Navbar'
import JobList from '../JobList/JobList'
import Footer from '../Footer/Footer'
import About from '../About/About'
import { useLocation } from 'react-router-dom'

const Main = () => {

    const { pathname } = useLocation();
    
    return(
        <div className={style.main}>
            <Navbar />
            {pathname === '/about' ? <About /> : <JobList />}
            <Footer />
        </div>
    )
}

export default Main