import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';
import * as S from './styles';

const PodcastEpisode = () => {
    const { setLoading } = useLoading();
    const { episodes } = useOutletContext();
    const { episodeId } = useParams();
    const episode = episodes.find((e) => e.id === episodeId);

    useEffect(() => {
        setLoading(true);
        return () => setLoading(false);
    }, []);

    if (episode == null) {
        return <p>Episode not found.</p>;
    }

    return (
        <S.EpisodeContainer>
            <S.EpisodeTitle>{episode.title}</S.EpisodeTitle>
            <S.EpisodeDescription
                /* In a real-world application this would be sanitized first. */
                dangerouslySetInnerHTML={{
                    __html: episode.description || 'Loading description...',
                }}
            />
            <S.AudioPlayer controls onCanPlay={() => setLoading(false)}>
                <source src={episode.audioSrc} type='audio/mpeg' />
                Your browser does not support the audio element.
            </S.AudioPlayer>
        </S.EpisodeContainer>
    );
};

export default PodcastEpisode;
