const getTopPodcastsUrl = ({ limit, genre }) => {
    return `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;
};

const getPodcastDetailUrl = (podcastId) => {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}`;
    return getAllOriginsUrl(url);
};

export const getAllOriginsUrl = (url) => {
    return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

export const PodcastAPI = {
    getTopPodcastsUrl,
    getPodcastDetailUrl,
    getAllOriginsUrl,
};
