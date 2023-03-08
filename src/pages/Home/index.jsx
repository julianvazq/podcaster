import React, { useState } from 'react';
import { PodcastAPI } from '../../api/PodcastAPI';
import { LS_KEYS } from '../../constants';
import useFetch from '../../hooks/useFetch';
import PodcastCount from './PodcastCount';
import PodcastFilter from './PodcastFilter';
import PodcastList from './PodcastList';
import * as S from './styles';

const Home = () => {
    const { data: podcasts = [] } = useFetch({
        url: PodcastAPI.getTopPodcastsUrl({ limit: 100, genre: 1310 }),
        lsKey: LS_KEYS.TopPodcasts,
    });
    const [filter, setFilter] = useState('');

    const filteredPodcasts =
        podcasts?.feed?.entry?.filter((p) => {
            const nameLowerCase = p['im:name']?.label?.toLowerCase();
            const artistLowerCase = p['im:artist']?.label?.toLowerCase();
            const filterLowerCase = filter?.toLowerCase();
            const containsName = nameLowerCase.includes(filterLowerCase);
            const containsArtist = artistLowerCase.includes(filterLowerCase);
            return containsName || containsArtist;
        }) || [];

    return (
        <>
            <S.FilterContainer>
                <PodcastCount count={filteredPodcasts.length} />
                <PodcastFilter
                    filterValue={filter}
                    onChangeHandler={setFilter}
                />
            </S.FilterContainer>
            <PodcastList podcasts={filteredPodcasts || []} />
        </>
    );
};

export default Home;
