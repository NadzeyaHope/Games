import {post} from '/lib/http';
export const login = (values) => {
    return post('api/users/login', values)
}
export const register = (values) => {
    return post('api/users/register', values)
}