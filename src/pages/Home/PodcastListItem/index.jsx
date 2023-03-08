import React from 'react';
import * as S from './styles';

const PodcastListItem = ({podcast, podcastId}) => {
    const name = podcast?.['im:name']?.label;
    const artist = podcast?.['im:artist']?.label;
    const fullTitle = podcast?.title?.label;
    const thumbnailSrc = podcast?.['im:image']?.[2]?.label;

    if (!name) return null;

  return (
    <S.ListItem>
        <S.PodcastLink to={`/podcast/${podcastId}`}>
          <S.PodcastThumbnail src={thumbnailSrc} alt={fullTitle}></S.PodcastThumbnail>
          <S.PodcastName>
            {name}
          </S.PodcastName>
          <S.PodcastArtist>
        Author: {artist}
          </S.PodcastArtist>
        </S.PodcastLink>
    </S.ListItem>
  )
}

export default PodcastListItem