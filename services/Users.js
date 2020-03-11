import Axios from "axios"
import { API } from '../config';

export const findUser = (id) => {
    return Axios.get(`${API}/users/1`)
        .then((response) => response.data)
}