import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { PodcastAPI } from '../../api/PodcastAPI';
import { useLoading } from '../../contexts/LoadingContext';
import useFetch from '../../hooks/useFetch';
import PodcastCard from './PodcastCard';
import * as S from './styles';

const parseJSON = (contents) => {
    try {
        return JSON.parse(contents);
    } catch (error) {
        console.log('Failed to parse JSON: ', error);
        return null;
    }
};

const secondsToHHMMSS = (seconds) => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const HHMMSS = date.toISOString().substring(11, 19);
    return HHMMSS;
};

const getRSSFeedDocument = async (feedUrl) => {
    try {
        const url = PodcastAPI.getAllOriginsUrl(feedUrl);
        const res = await fetch(url);
        const json = await res.json();
        const parser = new DOMParser();
        const document = await parser.parseFromString(
            json.contents,
            'application/xhtml+xml'
        );
        return document;
    } catch (error) {
        console.log('Failed to get RSS Feed: ', feedUrl);
        return null;
    }
};

const extractEpisodesData = (episodeElements) => {
    try {
        const arrayOfEpisodes = Array.from(episodeElements);
        const episodes = arrayOfEpisodes.map((e) => {
            const durationEle = e.getElementsByTagName('itunes:duration')[0];
            const durationInSeconds =
                durationEle?.firstChild?.nodeValue || durationEle?.nodeValue;

            return {
                title: e.querySelector('title')?.firstChild?.nodeValue,
                description:
                    e.querySelector('description')?.firstChild?.wholeText,
                audioSrc: e.querySelector('enclosure').getAttribute('url'),
                duration: secondsToHHMMSS(durationInSeconds),
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

const Podcast = () => {
    const { setLoading } = useLoading();
    let { podcastId } = useParams();
    const { data } = useFetch({
        url: PodcastAPI.getPodcastDetailUrl(podcastId),
        lsKey: podcastId,
    });
    const [description, setDescription] = useState(null);
    const [episodes, setEpisodes] = useState([]);

    const podcast = useMemo(() => {
        const contents = data?.contents;
        if (!contents) return null;
        const parsed = parseJSON(contents);
        const podcastData = parsed?.results?.[0];
        return podcastData || null;
    }, [data]);

    useEffect(() => {
        const getDescriptionAndEpisodes = async (feedUrl) => {
            const document = await getRSSFeedDocument(feedUrl);
            const description =
                document.querySelector('description')?.firstChild?.wholeText;
            setDescription(description);
            const episodeElements = document.querySelectorAll('item');
            const episodes = extractEpisodesData(episodeElements);
            setEpisodes(episodes);
        };

        if (podcast?.feedUrl) {
            setLoading(true);
            getDescriptionAndEpisodes(podcast.feedUrl)
                .catch((error) => console.log('Error: ', error))
                .finally(() => setLoading(false));
        }

        return () => setLoading(false);
    }, [podcast, setLoading]);

    if (podcast == null) {
        return <p>Loading podcast...</p>;
    }

    return (
        <S.Container>
            <PodcastCard podcast={podcast} description={description} />
            {episodes.length ? (
                <Outlet context={{ episodes }} />
            ) : (
                <p>Loading episodes...</p>
            )}
        </S.Container>
    );
};

export default Podcast;
