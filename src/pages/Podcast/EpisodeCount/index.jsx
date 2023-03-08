import React from 'react';
import * as S from './styles';

const EpisodeCount = ({ count }) => {
    return <S.Count>Episodes: {count}</S.Count>;
};

export default EpisodeCount;
