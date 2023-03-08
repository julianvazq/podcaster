import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const PodcastEpisode = () => {
    const { episodes } = useOutletContext();
    const { episodeId } = useParams();

    console.log('episodeId', episodeId);

    return <div>PodcastEpisode</div>;
};

export default PodcastEpisode;
