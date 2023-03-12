import { useState } from 'react';
import { getDateInXHours } from '../utils';

const getLocalStorageItem = (key) => {
    try {
        if (typeof window === 'undefined') return null;
        const stringifiedData = localStorage.getItem(key);
        const item = JSON.parse(stringifiedData);
        if (item == null) return null;
        const itemHasExpired =
            new Date(item.expiresAt).getTime() < new Date().getTime();
        if (itemHasExpired) return null;
        return item.data || null;
    } catch (error) {
        console.log(error);
        console.log(`Failed to get LocalStorage data for key: ${key}`);
        return null;
    }
};

const useLocalStorage = ({ key, expirationInHours = 24 }) => {
    const [value, setValue] = useState(() => getLocalStorageItem(key));

    const setLocalStorageItem = (value) => {
        try {
            const stringifiedData = JSON.stringify({
                data: value,
                expiresAt: expirationInHours
                    ? getDateInXHours(expirationInHours)
                    : null,
            });
            setValue(stringifiedData);
            localStorage.setItem(key, stringifiedData);
        } catch (error) {
            console.log(error);
            console.log(`Failed to set LocalStorage data for key: ${key}`);
        }
    };

    return [value, setLocalStorageItem];
};

export default useLocalStorage;
