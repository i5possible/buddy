const isEmpty = (obj) => {
    if (!obj && obj !== 0 && obj !== '') {
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

const saveToLocalStore = (label, content) => {
    localStorage.setItem(label, JSON.stringify(content));
};

export const getFromLocalStore = (label) => {
    return JSON.parse(localStorage.getItem(label));
};


export default {
    isEmpty,
    saveToLocalStore,
    getFromLocalStore,
};