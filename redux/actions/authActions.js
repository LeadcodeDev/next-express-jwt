import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie, getCookie } from '../../utils/cookie';
import { JwtDecode } from 'jwt-decode';

const authenticate = ({ username, password }, type) => {
    return (dispatch) => {
        axios.post(`${API}/${type}`, { username, password })
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
