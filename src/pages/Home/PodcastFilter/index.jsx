import React from 'react';
import * as S from './styles';

const PodcastFilter = ({ filterValue, onChangeHandler }) => {
    return (
        <S.Input
            type='text'
            placeholder='Filter podcasts...'
            value={filterValue}
            onChange={(e) => onChangeHandler(e.target.value)}
        />
    );
};

export default PodcastFilter;
