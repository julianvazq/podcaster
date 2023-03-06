import React, { useEffect } from 'react';
import { PodcastAPI } from '../../api/PodcastAPI';

const Home = () => {

  useEffect(() => {
    PodcastAPI.getTopPodcastEntries({limit: 100, genre: 1310}).then(data => {
      console.log('data', data);
    }).catch(error => {
        console.log('Error: ', error);
    })
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home