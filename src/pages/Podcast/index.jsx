import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { PodcastAPI } from '../../api/PodcastAPI';
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

const Podcast = () => {
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
        const getAdditionalPodastData = async () => {
            try {
                console.log('podcast.feedUrl', podcast.feedUrl);
                const url = PodcastAPI.getAllOriginsUrl(podcast.feedUrl);
                const res = await fetch(url);
                const json = await res.json();
                const parser = new DOMParser();
                const document = await parser.parseFromString(
                    json.contents,
                    'application/xhtml+xml'
                );
                console.log('feed', document);
                const description =
                    document.querySelector('description').firstChild.wholeText;
                setDescription(description);
                const arrayOfEpisodes = Array.from(
                    document.querySelectorAll('item')
                );
                const episodes = arrayOfEpisodes.map((e) => {
                    const durationEle =
                        e.getElementsByTagName('itunes:duration')[0];
                    return {
                        title: e.querySelector('title').firstChild.nodeValue,
                        description:
                            e.querySelector('description').firstChild.nodeValue,
                        duration:
                            durationEle?.firstChild.nodeValue ||
                            durationEle?.nodeValue,
                        id: e.querySelector('guid').firstChild.nodeValue,
                        date: e.querySelector('pubDate').firstChild.nodeValue,
                    };
                });
                console.log('episodes', episodes);
                setEpisodes(episodes);
            } catch (error) {
                console.log('Failed to parse podcast data: ', error);
            }
        };
        if (podcast?.feedUrl) {
            getAdditionalPodastData();
        }
    }, [podcast]);

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
