import { useEffect, useState } from 'react';
import { secondsToHHMMSS } from '../utils';

const usePodcastFeed = (feed) => {
    const [description, setDescription] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    const parseFeed = async (feed) => {
        try {
            const parser = new DOMParser();
            const document = await parser.parseFromString(
                feed,
                'application/xhtml+xml'
            );
            return document;
        } catch (error) {
            console.log('Error:', error);
            return null;
        }
    };

    useEffect(() => {
        const extractDataFromFeed = async (feed) => {
            const document = await parseFeed(feed);
            const description =
                document.querySelector('description')?.firstChild?.wholeText;
            setDescription(description);
            const episodeElements = document.querySelectorAll('item');
            const episodes = extractEpisodesData(episodeElements);
            setEpisodes(episodes);
        };

        if (feed) {
            extractDataFromFeed(feed);
        }
    }, [feed]);

    return { description, episodes };
};

const extractEpisodesData = (episodeElements) => {
    try {
        const arrayOfEpisodes = Array.from(episodeElements);
        const episodes = arrayOfEpisodes.map((e) => {
            const durationEle = e.getElementsByTagName('itunes:duration')[0];
            const durationRawValue =
                durationEle?.firstChild?.nodeValue || durationEle?.nodeValue;
            const durationFormattedValue = durationRawValue.includes(':')
                ? durationRawValue
                : secondsToHHMMSS(durationRawValue);
            return {
                title: e.querySelector('title')?.firstChild?.nodeValue,
                description:
                    e.querySelector('description')?.firstChild?.wholeText,
                audioSrc: e.querySelector('enclosure').getAttribute('url'),
                duration: durationFormattedValue,
                id: e.querySelector('guid')?.firstChild?.nodeValue,
                date: e.querySelector('pubDate')?.firstChild?.nodeValue,
            };
        });

        return episodes;
    } catch (error) {
        console.log('Failed to extract data from RSS Feed: ', error);
        return [];
    }
};

export default usePodcastFeed;
