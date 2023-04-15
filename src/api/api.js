const dbUrl = 'https://accent-db-e426e-default-rtdb.firebaseio.com';
const backendUrl = 'https://app.aaccent.su/js/confirm.php';


const getData = async (name, id) => {
    const res = await fetch(`${dbUrl}/${name}.json${id ? `?orderBy="brand"&equalTo=${id}` : ''}`)
    const data = await res.json();
    return data;
};

const postData = async obj => {
    const res = await fetch(`${backendUrl}`, {
        method: 'POST',
        body: JSON.stringify(obj)
    });
    const data = await res.json()
    return data;
};

export const API = {
    getData,
    postData
};