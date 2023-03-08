import { useEffect, useState } from 'react';
import { useLoading } from '../contexts/LoadingContext';

const useFetch = ({ url, lsKey }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { setLoading } = useLoading();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let data = null;
                const lsData = getLocalStorage(lsKey);
                if (lsData != null) {
                    data = lsData;
                } else {
                    const res = await fetch(url);
                    data = await res.json();
                    setLocalStorage(lsKey, data);
                }
                setData(data);
            } catch (error) {
                setError(error);
                console.log('Error: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, lsKey, setLoading]);

    const getLocalStorage = (lsKey) => {
        try {
            const stringifiedData = localStorage.getItem(lsKey);
            const item = JSON.parse(stringifiedData);
            const itemHasExpired =
                new Date(item.expiresAt).getTime() < new Date().getTime();
            if (item == null || itemHasExpired) return null;
            return item.data || null;
        } catch (error) {
            console.log(error);
            console.log(`Failed to get LocalStorage data for key: ${lsKey}`);
            return null;
        }
    };

    const setLocalStorage = (lsKey, data) => {
        try {
            const dateNow = new Date();
            const dateIn24Hours = new Date(
                dateNow.setHours(dateNow.getHours() + 24)
            );
            const stringifiedData = JSON.stringify({
                data,
                expiresAt: dateIn24Hours,
            });
            localStorage.setItem(lsKey, stringifiedData);
        } catch (error) {
            console.log(error);
            console.log(`Failed to set LocalStorage data for key: ${lsKey}`);
        }
    };

    return { data, error };
};

export default useFetch;
