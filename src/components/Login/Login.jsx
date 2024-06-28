import style from '../Login/Login.module.css'
import Admin from '../Admin/Admin.jsx'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {

    const admin_user = process.env.VITE_ADMIN_NAME
    const admin_password = process.env.VITE_ADMIN_PASSWORD

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [permiso, setPermiso] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === admin_user && password === admin_password) {
            setPermiso(true);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales incorrectas!",
            });
        }
    };

    return (
        <div>
            {permiso ? (
                <Admin />
            ) : (
                <div className={style.login}>
                    <form onSubmit={handleSubmit} method='post' className={style.form}>
                        <h1>Artesanias Kalesa</h1>
                        <span>Administrador</span>
                        <fieldset>
                        <legend>Usuario:</legend>
                        <input 
                            type='text' 
                            placeholder='Nombre de usuario' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        </fieldset>
                        <fieldset>
                        <legend>Contraseña:</legend>
                        <input 
                            type='password' 
                            placeholder='Contraseña' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        </fieldset>
                        <button type='submit'>Iniciar sesión</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login