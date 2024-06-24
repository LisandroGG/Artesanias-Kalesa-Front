import style from '../Main/Main.module.css'
import Navbar from '../Navbar/Navbar'
import JobList from '../JobList/JobList'
import Footer from '../Footer/Footer'

const Main = () => {
    
    return(
        <div>
            <Navbar />
            <JobList />
            <Footer />
        </div>
    )
}

export default Main