export const createRequest =  async (values, url) => {  const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values)
    });
    return res;
}