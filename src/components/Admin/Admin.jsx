import style from '../Admin/Admin.module.css'
import PostForm from '../PostForm/PostForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTrabajos, deleteTrabajo } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Admin = () => {

    const dispatch = useDispatch()
    const trabajos = useSelector((state) => state.trabajos)
    const [view, setView] = useState('trabajos');

    useEffect(() =>{
        dispatch(getTrabajos())
    }, [dispatch])

    const handleDelete = async (id) => {
        Swal.fire({
          title: "¿Deseas borrar este trabajo?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Si, borrar"
        }).then(async (result) => {
          if (result.isConfirmed) {
            await dispatch(deleteTrabajo(id));
            dispatch(getTrabajos());
      
            Swal.fire({
              title: "Borrado",
              text: "El trabajo fue borrado exitosamente",
              icon: "success"
            });
          }
        });
      };
    
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
            <div className={style.content}>
            {view === 'crear' ? (
                <PostForm />
            ) : (
                
                <div className={style.cards}>
                    {
                trabajos.map((trabajo) => (
                    <div key={trabajo.id} className={style.card}>
                        {trabajo.imagen && <img src={trabajo.imagen} alt={trabajo.nombre} />}
                        <h3>{trabajo.nombre}</h3>
                        <p>{trabajo.descripcion}</p>
                        <button onClick={() => handleDelete(trabajo.id)}>Borrar</button>
                    </div>
                ))
            }</div>)}
        </div>
        </div>
    );
    
};

export default Admin