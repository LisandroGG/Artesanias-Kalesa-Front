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
        <div className={style.cards}>
            {trabajos.map(trabajo => <div key={trabajo.id} className={style.card}>
                    {trabajo.imagen && <img src={trabajo.imagen} alt={trabajo.nombre} />}
                    <h3>{trabajo.nombre}</h3>
                    <p>{trabajo.descripcion}</p>
                </div>
            )}
            </div>
    )
}

export default JobList