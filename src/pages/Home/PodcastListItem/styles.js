import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoxShadowCSS } from '../../../styles';

export const ListItem = styled.li`
    ${BoxShadowCSS}
    padding: 0.5rem;
    text-align: center;
`;

export const PodcastLink = styled(Link)``;

export const PodcastThumbnail = styled.img`
    width: 125px;
    border-radius: 50%;
    transform: translateY(-50%);
    margin-bottom: -25%;
`;

export const PodcastName = styled.h2`
    text-transform: uppercase;
    color: black;
    font-size: 1rem;
`;

export const PodcastArtist = styled.h3`
    color: gray;
    font-size: 1rem;
    font-weight: 400;
`;
