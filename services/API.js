import Axios from "axios"

/**
 * @param {string} url URL to call in order to execute the action
 * @description Call on Axios to recover the resources specific to the route indicated
 */
const find = async (url) => {
    return await Axios.get(process.env.API + '/' + url)
        .then((response) => response.data)
}

/**
 * @param {string} url URL to call in order to execute the action
 * @description Call on Axios to recover all the resources specific to the indicated route
 */
const findAll = async (url) => {
    return await Axios.get(process.env.API + '/' + url)
        .then((response) => response.data["hydra:member"])
}

/**
 * @param {string} url URL to call in order to execute the action
 * @param {JSON} data JSON object
 * @description Calls on Axios to create the resource with the POST method
 * @return Resource route
 */
const post = async (url, data) => {
    return await Axios.post(process.env.API + '/' + url, data)
        .then((response) => response.data["hydra:member"])
}

/**
 * @param {string} url URL to call in order to execute the action
 * @param {JSON} data New JSON object
 * @description Calls on Axios to update the resource with the PUT method
 * @return Resource route
 */
const put = async (url, data) => {
    return await Axios.put(process.env.API + '/' + url, data)
        .then((response) => response.data["hydra:member"])
}

/**
 * @param {string} url URL to call in order to execute the action
 * @description Calls on Axios to delete the resource with the DELETE method
 */
const remove = async (url) => {
    return await Axios.delete(process.env.API + '/' + url)
        .then((response) => response.data["hydra:member"])
}

export default {
    find,
    findAll,
    post,
    put,
    remove
}