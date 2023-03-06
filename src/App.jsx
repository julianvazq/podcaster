import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppHeader from './components/AppHeader'
import Home from './pages/home'
import Podcast from './pages/Podcast'

function App() {
  return (<>
  <AppHeader />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/podcast/:podcastId" element={<Podcast/>}/>
    </Routes>
  </>
  )
}

export default App
