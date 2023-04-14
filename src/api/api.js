const dbUrl = 'https://accent-db-e426e-default-rtdb.firebaseio.com'

// const getData = async name => {
//     const res = await fetch(`${dbUrl}/${name}.json`)
//     const data = await res.json();
//     return data;
// };

const getData = async (name, id) => {
    const res = await fetch(`${dbUrl}/${name}.json${id ? `?orderBy="brand"&equalTo=${id}` : ''}`)
    const data = await res.json();
    return data;
};

export const API = {
    getData
};