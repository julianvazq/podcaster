import React from 'react';
import PodcastListItem from '../PodcastListItem';
import * as S from './styles';

const PodcastList = ({ podcasts }) => {
    if (!podcasts?.length) {
        return <p>No podcasts found.</p>;
    }

    console.log('podcasts', podcasts);

    return (
        <S.PodcastList>
            {podcasts.map((p) => {
                const podcastId = p.id.attributes['im:id'];
                return (
                    <PodcastListItem
                        key={podcastId}
                        podcast={p}
                        podcastId={podcastId}
                    />
                );
            })}
        </S.PodcastList>
    );
};

export default PodcastList;
