import style from '../JobList/JobList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTrabajos } from '../../redux/actions'

const JobList = () => {

    const dispatch = useDispatch()
    const trabajos = useSelector((state) => state.trabajos)

    useEffect(() =>{
        dispatch(getTrabajos())
    }, [dispatch])
    
    return(
        <div>
            {trabajos.map(trabajo => <div key={trabajo.id} className={style.card}>
                    <h3>{trabajo.nombre}</h3>
                    <p>{trabajo.descripcion}</p>
                    {trabajo.imagen && <img src={trabajo.imagen} alt={trabajo.nombre} />}
                </div>)}
        </div>
    )
}

export default JobList