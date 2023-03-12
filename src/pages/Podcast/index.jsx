import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { PodcastAPI } from '../../api/PodcastAPI';
import useFetch, { STATUS } from '../../hooks/useFetch';
import usePodcastFeed from '../../hooks/usePodcastFeed';
import PodcastCard from './PodcastCard';
import * as S from './styles';

const Podcast = () => {
    let { podcastId } = useParams();
    const { data: podcast, status: podcastStatus } = useFetch({
        url: PodcastAPI.getPodcastDetailUrl(podcastId),
        lsKey: podcastId,
        allOrigins: true,
    });
    const { data: feed, status: feedStatus } = useFetch({
        url: podcast?.feedUrl || null,
        lsKey: `${podcastId}_feed`,
        allOrigins: true,
        parseJson: false,
    });
    const { description, episodes } = usePodcastFeed(feed);

    if (podcastStatus === STATUS.Error) {
        return <p>Failed to load podcast.</p>;
    }

    if (podcastStatus === STATUS.Idle || podcastStatus === STATUS.Fetching) {
        return <p>Loading podcast...</p>;
    }

    return (
        <S.Container>
            <PodcastCard podcast={podcast} description={description} />
            {feedStatus === STATUS.Error && <p>Failed to load podcast feed.</p>}
            {(feedStatus === STATUS.Idle || feedStatus === STATUS.Fetching) && (
                <p>Loading podcast feed...</p>
            )}
            {feedStatus === STATUS.Success && <Outlet context={{ episodes }} />}
        </S.Container>
    );
};

export default Podcast;
