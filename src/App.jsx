import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import PodcastEpisodes from './pages/Podcast/PodcastEpisodes';
import PodcastEpisode from './pages/PodcastEpisode';

function App() {
    return (
        <>
            <AppHeader />
            <Routes>
                <Route index element={<Home />} />
                <Route path='podcast/:podcastId' element={<Podcast />}>
                    <Route index element={<PodcastEpisodes />} />
                    <Route
                        path='episode/:episodeId'
                        element={<PodcastEpisode />}
                    />
                </Route>
                <Route path='*' element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
