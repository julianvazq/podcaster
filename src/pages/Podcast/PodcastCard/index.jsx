import React from 'react';
import * as S from './styles';

const PodcastCard = ({ podcast, description }) => {
    const podcastId = podcast.collectionId;
    const podcastName = podcast.trackName;
    const artistName = podcast.artistName;
    const thumbnailSrc = podcast.artworkUrl600;
    const url = `/podcast/${podcastId}`;

    return (
        <S.PodcastCard>
            <section>
                <S.PodcastLink to={url}>
                    <S.PodcastThumbnail src={thumbnailSrc}></S.PodcastThumbnail>
                </S.PodcastLink>
            </section>
            <section>
                <S.PodcastLink to={url}>
                    <S.PodcastName>{podcastName}</S.PodcastName>
                    <S.ArtistName>by {artistName}</S.ArtistName>
                </S.PodcastLink>
            </section>
            <section>
                <S.DescriptionHeader>Description:</S.DescriptionHeader>
                <S.DescriptionText
                    /* In a real-world application this would be sanitized first. */
                    dangerouslySetInnerHTML={{
                        __html: description || 'Loading description...',
                    }}
                ></S.DescriptionText>
            </section>
        </S.PodcastCard>
    );
};

export default PodcastCard;
