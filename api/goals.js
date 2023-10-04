import {post} from 'lib/http';

export const createGoal = async (values) => {
    return await post('/api/goals/create' , values)
}
export const findList = async (values) => {
    return await post('/api/goals/list', values)
}