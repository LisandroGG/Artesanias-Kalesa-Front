import style from '../Admin/Admin.module.css'
import PostForm from '../PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTrabajos, deleteTrabajo } from '../../redux/actions'
import { Link } from 'react-router-dom'

const Admin = () => {

    const dispatch = useDispatch()
    const trabajos = useSelector((state) => state.trabajos)
    const [view, setView] = useState('trabajos');

    useEffect(() =>{
        dispatch(getTrabajos())
    }, [dispatch])

    const handleDelete = async(id) => {
        await dispatch(deleteTrabajo(id));
        dispatch(getTrabajos())
    }
    
    return(
        <div className={style.admin}>
            <div className={style.head}>
                <span>PANEL DE ADMIN</span>
            </div>
            <div className={style.buttons}>
                <button 
                    onClick={() => setView('trabajos')} 
                    className={view === 'trabajos' ? style.activeButton : ''}
                >
                    Trabajos
                </button>
                <button 
                    onClick={() => setView('crear')} 
                    className={view === 'crear' ? style.activeButton : ''}
                >
                    Crear Trabajo
                </button>
                <Link to={'/'}>
                <button>
                    Volver al inicio
                </button>
                </Link>
            </div>
            {view === 'crear' ? (
                <PostForm />
            ) : (
                trabajos.map((trabajo) => (
                    <div key={trabajo.id} className={style.card}>
                        <h3>{trabajo.nombre}</h3>
                        <p>{trabajo.descripcion}</p>
                        {trabajo.imagen && <img src={trabajo.imagen} alt={trabajo.nombre} />}
                        <button onClick={() => handleDelete(trabajo.id)}>Borrar</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Admin