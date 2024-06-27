import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getTrabajos, postTrabajo } from '../../redux/actions';

const PostForm = () => {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [preview, setPreview] = useState(null);
    const inputFileRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('imagen', imagen);

        await dispatch(postTrabajo(formData));
        dispatch(getTrabajos())

        setNombre('');
        setDescripcion('');
        setImagen(null);
        setPreview(null);

        if (inputFileRef.current) {
            inputFileRef.current.value = '';
            inputFileRef.current.key = Date.now();
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type="file" name="imagen" accept=".png, .jpg, .jpeg" onChange={handleImageChange} key={Date.now()}/>
                {preview && <img src={preview} alt="Vista previa de la imagen"/>}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default PostForm;