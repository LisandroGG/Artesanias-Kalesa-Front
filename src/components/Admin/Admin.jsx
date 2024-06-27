import style from '../Admin/Admin.module.css'
import PostForm from '../PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTrabajos, deleteTrabajo } from '../../redux/actions'

const Admin = () => {

    const dispatch = useDispatch()
    const trabajos = useSelector((state) => state.trabajos)

    useEffect(() =>{
        dispatch(getTrabajos())
    }, [dispatch])

    const handleDelete = async(id) => {
        await dispatch(deleteTrabajo(id));
        dispatch(getTrabajos())
    }
    
    return(
        <div>
            <h1>PANEL DE ADMIN</h1>
            <PostForm />
            {trabajos.map((trabajo) => (
                <div key={trabajo.id} className={style.card}>
                    <h3>{trabajo.nombre}</h3>
                    <p>{trabajo.descripcion}</p>
                    {trabajo.imagen && <img src={trabajo.imagen} alt={trabajo.nombre} />}
                    <button onClick={() => handleDelete(trabajo.id)}>Borrar</button>
                </div>
            ))}
        </div>
    );
};

export default Admin