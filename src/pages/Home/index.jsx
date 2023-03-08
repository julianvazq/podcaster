import React from 'react';
import { PodcastAPI } from '../../api/PodcastAPI';
import { LS_KEYS } from '../../constants';
import useFetch from '../../hooks/useFetch';
import PodcastList from './PodcastList';

const Home = () => {
    const {data: podcasts} = useFetch({url: PodcastAPI.getTopPodcastsUrl({limit: 100, genre: 1310}), lsKey: LS_KEYS.TopPodcasts })

  return (
    <PodcastList podcasts={podcasts?.feed?.entry || []} />
  )
}

export default Home;