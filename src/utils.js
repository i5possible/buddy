import axios from 'axios';

export const isEmpty = (obj) => {
    if (!obj || obj === 0 || obj.trim() === '') {
        return true;
    }
    if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
        return true;
    }
    if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
        return true;
    }
    return false;
};

export const saveToLocalStore = (label, content) => {
    localStorage.setItem(label, JSON.stringify(content));
};

export const getFromLocalStore = (label) => {
    return JSON.parse(localStorage.getItem(label));
};

export const client = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
});

export const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
    isEmpty,
    saveToLocalStore,
    getFromLocalStore,
    client
};