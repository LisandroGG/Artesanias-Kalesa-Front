import style from '../Login/Login.module.css'
import Admin from '../Admin/Admin.jsx'
import { useState } from 'react'

const Login = () => {

    const admin_user = process.env.VITE_ADMIN_NAME
    const admin_password = process.env.VITE_ADMIN_PASSWORD

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [permiso, setPermiso] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === admin_user && password === admin_password) {
            setPermiso(true);
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return(
        <>
        {permiso ? <Admin /> : ''}
        {permiso ? '' : 
        <form onSubmit={handleSubmit} method='post'>
                <input 
                    type='text' 
                    placeholder='Nombre de usuario' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type='password' 
                    placeholder='Contraseña' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type='submit'>Iniciar sesión</button>
            </form>}
            
        </>
    )
}

export default Login