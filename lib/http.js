const objectQuery = (obj) => {
    const entries = Object.entries(obj);
    if(entries.length === 0){
        return '';
    }
    return '?' + entries.map(([key, value])=> `${key}=${value}`).join('&');
}
const request = async (props) => {
    const {url, method, body} = props;
    const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined
    })
    return response.json();
}
export const post = (url, date) => {
    return request({url, method : 'POST', body : date})
}
export const get = (path, date) => {
    return request({url : `${path}${objectQuery(date)}`, method : 'GET'})

}