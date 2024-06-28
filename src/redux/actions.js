import axios from 'axios'
import { GET_TRABAJOS, POST_TRABAJO, DELETE_TRABAJO } from './action-type.js'

const LOCAL = process.env.VITE_LOCAL
const DEPLOY_URL = process.env.VITE_HOST

export const getTrabajos = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`${DEPLOY_URL}/trabajos`)

            return dispatch({
                type: GET_TRABAJOS,
                payload: data
            })
        } catch (error) {
            console.log('Error al conseguir datos sobre trabajos', error)
        }
    }
}

export const postTrabajo = (formData) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.post(`${DEPLOY_URL}/trabajos`, formData, {
                header: {
                    'Content-type': 'multipart/form-data'
                }
            })
            return dispatch({
                type: POST_TRABAJO,
                payload: data
            })
        } catch (error) {
            console.log('Error al postear un trabajo', error)
        }
    }
}

export const deleteTrabajo = (idTrabajo) => {
    return async(dispatch) => {
        try {
            const response = await axios.delete(`${DEPLOY_URL}/trabajos/${idTrabajo}`)
            const data = response.data;

            return dispatch({
                type: DELETE_TRABAJO,
                payload: data
            })
        } catch (error) {
            console.log('Error al borrar trabajo')
        }
    }
}