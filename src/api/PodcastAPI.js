const getTopPodcasts = async ({ limit, genre }) => {
    const res = await fetch(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`
    );
    const data = await res.json();
    return data?.feed?.entry;
};

export const PodcastAPI = {
    getTopPodcastEntries: getTopPodcasts,
};
