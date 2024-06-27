import style from '../PostForm/PostForm.module.css'
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getTrabajos, postTrabajo } from '../../redux/actions';
import noImage from '/noimage.png'
import Swal from 'sweetalert2'

const PostForm = () => {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [preview, setPreview] = useState(noImage);
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
        setPreview(noImage);

        if (inputFileRef.current) {
            inputFileRef.current.value = '';
            inputFileRef.current.key = Date.now();
        }

        Swal.fire({
            icon: "success",
            title: "Trabajo subido!",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const isFormComplete = nombre && descripcion && imagen;

    return (
        <div className={style.postForm}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Subir un trabajo</h1>
                <fieldset>
                    <legend>Nombre del trabajo</legend>
                <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete='off'/>
                </fieldset>
                <fieldset>
                    <legend>Descripcion del trabajo</legend>
                <input type="text" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} autoComplete='off'/>
                </fieldset>
                <p>Imagen del trabajo:</p>
                <input type="file" name="imagen" accept=".png, .jpg, .jpeg" onChange={handleImageChange} key={Date.now()}/>
                {preview && <img src={preview} alt="Vista previa de la imagen"/>}
                <button type="submit" disabled={!isFormComplete}>Subir</button>
            </form>
        </div>
    );
};

export default PostForm;