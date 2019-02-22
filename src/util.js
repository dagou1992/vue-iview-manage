import axios from 'axios';

const instance = getDefaultInstance();

export function getJson(url, data) {
    return instance.get(url, { params: data });
}

function getDefaultInstance() {
    return axios.create({
        baseURL: '/',
    });
}