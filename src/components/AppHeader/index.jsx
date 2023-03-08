import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import Loader from '../Loader';
import * as S from './styles';

const AppHeader = () => {
    const { loading } = useLoading();

    return (
        <S.HeaderContainer>
            <S.HomeLink to='/'>
                <S.Header>Podcaster</S.Header>
            </S.HomeLink>
            {loading && <Loader />}
        </S.HeaderContainer>
    );
};

export default AppHeader;
