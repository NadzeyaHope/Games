import {post} from 'lib/http';

export const createGoal = async (values) => {
    return await post('/api/goals/list' , values)
}