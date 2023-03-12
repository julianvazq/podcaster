import { useEffect, useState } from 'react';
import { PodcastAPI } from '../api/PodcastAPI';
import { useLoading } from '../contexts/LoadingContext';
import { parseJSON } from '../utils';
import useLocalStorage from './useLocalStorage';

export const STATUS = {
    Idle: 'Idle',
    Error: 'Error',
    Fetching: 'Fetching',
    Success: 'Success',
};

const useFetch = ({ url, lsKey, allOrigins = false, parseJson = true }) => {
    const { setLoading } = useLoading();
    const [lsData, setLsData] = useLocalStorage({ key: lsKey });
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(STATUS.Idle);

    useEffect(() => {
        const fetchData = async (url) => {
            try {
                setLoading(true);
                setStatus(STATUS.Fetching);
                const res = await fetch(url);
                const json = await res.json();
                const data = allOrigins
                    ? parseAllowOriginsContents(json, parseJson)
                    : json;
                setLsData(data);
                setData(data);
                setStatus(STATUS.Success);
            } catch (error) {
                setStatus(STATUS.Error);
                console.log('Error: ', error);
            } finally {
                setLoading(false);
            }
        };

        if (lsData) {
            setStatus(STATUS.Success);
            return;
        }

        if (url && data == null && status !== STATUS.Fetching) {
            const finalUrl = allOrigins
                ? PodcastAPI.getAllOriginsUrl(url)
                : url;
            fetchData(finalUrl);
        }

        return () => setLoading(false);
    }, [url, lsKey, allOrigins, parseJson, lsData, setLsData, setLoading]);

    return { data: data || lsData, status };
};

const parseAllowOriginsContents = (rawData, parseJson) => {
    const contents = rawData?.contents;
    if (!contents) return null;
    let data = null;
    if (parseJson) {
        const parsed = parseJSON(contents);
        data = parsed?.results?.[0] || null;
    } else {
        data = contents;
    }
    return data;
};

export default useFetch;
