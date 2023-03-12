export const parseXML = async (data) => {
    const dataAsText = await data.text();
    const parser = new DOMParser();
    return await parser.parseFromString(dataAsText, 'application/xhtml+xml');
};

export const parseJSON = (contents) => {
    try {
        return JSON.parse(contents);
    } catch (error) {
        console.log('Failed to parse JSON: ', error);
        return null;
    }
};

export const secondsToHHMMSS = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const HHMMSS = date.toISOString().substring(11, 19);
    return HHMMSS;
};

export const getDateInXHours = (hours) => {
    const dateNow = new Date();
    return new Date(dateNow.setHours(dateNow.getHours() + hours));
};
