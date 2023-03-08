import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppHeader from './components/AppHeader'
import Home from './pages/Home'
import Podcast from './pages/Podcast'

function App() {
  return (
  <>
    <AppHeader />
    <Routes>
      <Route index element={<Home/>}/>
      <Route  path="/podcast/:podcastId" element={<Podcast/>}/>
      <Route path="*" element={<Home />} />
    </Routes>
  </>
  )
}

export default App;
