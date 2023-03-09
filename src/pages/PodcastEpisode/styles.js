import styled from 'styled-components';
import { BoxShadowCSS, ContainerPaddingCSS } from '../../styles';

export const EpisodeContainer = styled.article`
    ${BoxShadowCSS}
    ${ContainerPaddingCSS}
`;

export const EpisodeTitle = styled.h2``;

export const EpisodeDescription = styled.p``;

export const AudioPlayer = styled.audio`
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid lightgray;
`;
