import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { setCookie, removeCookie, getCookie } from '../../utils/cookie';

const authenticate = ({ username, password }, type) => {
    return (dispatch) => {
        axios.post(`${process.env.API}/${type}`, { username, password })
            .then((response) => {
                setCookie('token', response.data.token)
                Router.push('/')
                dispatch({type: AUTHENTICATE, payload: response.data.token})
            })
            .catch((err) => {
                throw new Error(err)
            })
    }
}

const reauthenticate = (token) => {
    return (dispatch) => {
        dispatch({type: AUTHENTICATE, payload: token});
    }
}

const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('token')
        Router.push('/')
        dispatch({type: DEAUTHENTICATE})
    }
}

export default {
    authenticate,
    reauthenticate,
    deauthenticate
}
