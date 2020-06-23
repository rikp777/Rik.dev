import ApiService from "../services/api.service";


const userResource = "user"
export const UserApi = {
    create(params) {
        return ApiService.post(userResource, params)
    },
    update(slug, params) {
        return ApiService.update(userResource, slug, params)
    },
    get(slug) {
        return ApiService.get(userResource, slug)
    },
    getAll() {
        return ApiService.get(userResource)
    }
}