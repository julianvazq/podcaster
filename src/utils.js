export const parseXML = async (data) => {
    const dataAsText = await data.text();
    const parser = new DOMParser();
    return await parser.parseFromString(dataAsText, 'application/xhtml+xml');
};
