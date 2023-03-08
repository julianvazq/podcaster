import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoxShadowCSS, ContainerPadding } from '../../../styles';

export const PodcastCard = styled.article`
    ${BoxShadowCSS}
    ${ContainerPadding}
    & > section + section {
        border-top: 1px solid lightgray;
        padding-top: 1rem;
        margin-top: 1rem;
    }
`;

export const PodcastThumbnail = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 80%;
`;

export const PodcastName = styled.h2`
    font-size: 1rem;
`;

export const ArtistName = styled.h3`
    font-size: 1rem;
    font-weight: 400;
`;

export const DescriptionHeader = styled.h4``;

export const DescriptionText = styled.p`
    font-style: italic;
`;

export const PodcastLink = styled(Link)`
    color: inherit;
`;
