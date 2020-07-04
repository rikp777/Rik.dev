import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import applyConverters from "axios-case-converter";


const API_URL = process.env.VUE_APP_BASE_API
const API_SERVICE = 'ApiService'

export const ApiService = {
    initialize() {
        Vue.use(VueAxios, axios)
        //Vue.axios.defaults.baseURL = "http://localhost:8081/"
    },

    setHeaders() {
        // const authToken = jwt.getToken('authToken');
        //
        // if (authToken) {
        //     Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(authToken)}`
        // }
    },

    query(resource, params) {
        //Vue.$log.info(API_SERVICE, resource, params)

        const request = applyConverters(Vue.axios)
            .get(`${resource}`, params)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, resource, error)
                throw `[Developer Mode] ApiService ${resource} \n ${error.response.data.message}`;
            });
        return request;
    },

    getByParam(resource, param = "") {
        //Vue.$log.info(API_SERVICE, resource, param)

        const request = applyConverters(Vue.axios)
            .get(`${resource}${param}`)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, resource, error)
                throw `[Developer Mode] ApiService ${resource} \n ${error.response.data.message}`;
            });
        return request;
    },

    get(resource, slug = "") {
        //Vue.$log.info(API_SERVICE, `${resource}/${slug}`)
        console.log("rik")
        return Vue.axios
            .get(`${resource}/${slug}`)
            .catch(error => {
                Vue.$log.fatal(API_SERVICE, `${resource}/${slug}`, error)
            });
    },

    post(resource, params) {
        //Vue.$log.info(API_SERVICE, resource, params)

        const request = applyConverters(Vue.axios)
            .post(`${resource}`, params)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, resource, error)
                throw `[Developer Mode] ApiService ${resource} \n ${error.response.data.message}`;
            });
        return request;
    },

    update(resource, slug, params) {
        //Vue.$log.info(API_SERVICE, `${resource}/${slug}`, params)

        const request = applyConverters(Vue.axios)
            .put(`${resource}/${slug}`, params)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, `${resource}/${slug}`, error)
                throw `[Developer Mode] ApiService ${resource}/${slug} \n ${error.response.data.message}`;
            });
        return request;
    },

    put(resource, params) {
        //Vue.$log.info(API_SERVICE, resource, params)

        const request = applyConverters(Vue.axios)
            .put(`${resource}`, params)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, resource, error)
                throw `[Developer Mode] ApiService ${resource} \n ${error.response.data.message}`;
            });
        return request
    },

    delete(resource, slug) {
        //Vue.$log.info(API_SERVICE, `${resource}/${slug}`)

        const request = applyConverters(Vue.axios)
            .delete(`${resource}/${slug}`)
            .catch(error => {
                //Vue.$log.fatal(API_SERVICE, `${resource}/${slug}`, error)
                throw `[Developer Mode] ApiService ${resource}/${slug} \n ${error.response.data.message}`;
            });
        return request
    }
}

export default ApiService