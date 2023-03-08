import React from 'react';
import { useOutletContext } from 'react-router-dom';
import EpisodeCount from '../EpisodeCount';
import EpisodeTable from '../EpisodeTable';
import * as S from './styles';

const PodcastEpisodes = () => {
    const { episodes } = useOutletContext();

    return (
        <S.EpisodesContainer>
            <EpisodeCount count={episodes.length} />
            <EpisodeTable episodes={episodes} />
        </S.EpisodesContainer>
    );
};

export default PodcastEpisodes;
