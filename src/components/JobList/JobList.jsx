import style from '../JobList/JobList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTrabajos, deleteTrabajo } from '../../redux/actions'

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
            {trabajos.map(trabajo => <div key={trabajo.id} className={style.card}>
                    <h3>{trabajo.nombre}</h3>
                    <p>{trabajo.descripcion}</p>
                    {trabajo.imagen && <img src={`${import.meta.env.VITE_HOST}${trabajo.imagen}`} alt={trabajo.nombre} />}
                    <button onClick={() => handleDelete(trabajo.id)}>Borrar</button>
                </div>)}
        </div>
    )
}

export default JobList