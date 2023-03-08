const getTopPodcastsUrl = ({ limit, genre }) => {
    return `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;
};

export const PodcastAPI = {
    getTopPodcastsUrl,
};
