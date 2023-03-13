import React, { useState } from 'react';
import { PodcastAPI } from '../../api/PodcastAPI';
import { LS_KEYS } from '../../constants';
import useFetch, { STATUS } from '../../hooks/useFetch';
import PodcastCount from './PodcastCount';
import PodcastFilter from './PodcastFilter';
import PodcastList from './PodcastList';
import * as S from './styles';

const Home = () => {
    const { data: podcasts = [], status } = useFetch({
        url: PodcastAPI.getTopPodcastsUrl({ limit: 100, genre: 1310 }),
        lsKey: LS_KEYS.TopPodcasts,
    });
    const [filter, setFilter] = useState('');

    const filteredPodcasts = getFilteredPodcasts(podcasts?.feed?.entry, filter);

    if (status === STATUS.Error) {
        return <p>Failed to load podcasts.</p>;
    }

    if (status === STATUS.Idle || status === STATUS.Fetching) {
        return <p>Loading podcasts...</p>;
    }

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

const getFilteredPodcasts = (podcasts, filter) => {
    return (
        podcasts?.filter((p) => {
            const nameLowerCase = p['im:name']?.label?.toLowerCase();
            const artistLowerCase = p['im:artist']?.label?.toLowerCase();
            const filterLowerCase = filter?.toLowerCase();
            const containsName = nameLowerCase.includes(filterLowerCase);
            const containsArtist = artistLowerCase.includes(filterLowerCase);
            return containsName || containsArtist;
        }) || []
    );
};

export default Home;
