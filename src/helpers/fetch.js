import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.REACT_APP_API_URI;

export const fetchNotToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
    };
};

export const fetchWithToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                "Authorization": token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)
        });
    };
};

export const fetchFormData = (endpoint, data, method = 'POST') => {
    const url = `${baseUrl}/${endpoint}`;

    const token = localStorage.getItem('token') || '';

    return fetch(url, {
        method,
        headers: {
            "Authorization": token
        },
        body: data,
        redirect: 'follow'
    });
};


