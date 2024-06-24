import style from '../JobList/JobList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTrabajos, deleteTrabajo } from '../../redux/actions'
import { Link } from 'react-router-dom'

const JobList = () => {

    const dispatch = useDispatch()
    const trabajos = useSelector((state) => state.trabajos)

    useEffect(() =>{
        dispatch(getTrabajos())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteTrabajo(id))
        window.location.reload()
    }
    
    return(
        <div>
            {trabajos.map(trabajo => <div key={trabajo.id}>
                    <h3>{trabajo.nombre}</h3>
                    <p>{trabajo.descripcion}</p>
                    {trabajo.imagen && <img src={`http://localhost:3000${trabajo.imagen}`} alt={trabajo.nombre} />}
                    <button onClick={() => handleDelete(trabajo.id)}>Borrar</button>
                </div>)}
                <Link
            to='/admin'>
                <button className={style.btn}>admin</button>
            </Link>
        </div>
    )
}

export default JobList