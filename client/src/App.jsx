import { useState , useEffect } from 'react'
import './App.css'
import TextBlock from './components/TextBlock'
import NewsSource from './components/NewsSource'
import GenreSelection from './components/GenreSelection'
import Header from './components/Header'
const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

function App() {
  const [sources, setSources] = useState([['https://yt3.googleusercontent.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s900-c-k-c0x00ffffff-no-rj', 'CNN'], ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1280px-Fox_News_Channel_logo.svg.png', 'Fox News'], ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVD42A8Qq2LuigyjvjH07iS-9xTALFaQDgw&s', 'NBC'], ['https://api.time.com/wp-content/themes/time2014/img/time-logo-og.png', 'TIME'], ['https://pbs.twimg.com/profile_images/1707446114717429760/Bt3mH-ZU_400x400.jpg', 'CBS']])
  // const [genres, setGeneres] = useState(['Finance', 'Politics', 'World', 'Health', 'Business', 'Environment', 'Tech', 'Entertainment', 'Science', 'History', 'Sports']);
  const [genres, setGeneres] = useState(['Finance', 'Politics', 'World', 'Business', 'Environment', 'Tech', 'Entertainment', 'Sports']);
  const[selectedSources, setSelectedSources] = useState([true, true, true, true, true, true])
  const [selectedGenre, setSelectedGenre] = useState('Finance');
  const updateSources = (data) => {
    setSelectedSources(data);
    // console.log("new sources ", data);
  }
  const handleChangeGenre = (genre) => {
    setSelectedGenre(genre);
    // console.log("new genre  ", genre);
  }
  useEffect(() => {
    console.log('Updated selectedSources:', selectedSources);
  }, [selectedSources, selectedGenre]);

  return (
    <>
      <div className='App'> {/* main page */}
        <Header/>
        <h3 className="sub-title">News Sources</h3>
        <div className='big-container'>
          <NewsSource sources={sources} onChangeSelected={updateSources}/>
        </div>
        <h3 className="genre-title">Genre</h3>
        <div className='big-container'>
          <GenreSelection genres={genres} onChangeGenre={handleChangeGenre}></GenreSelection>
        </div>
        <h3 className="sub-title">Summary</h3>
        <TextBlock type="main-summary"/>
        <h3 className="sub-title">Summary (Separate Sources)</h3>
        {
        genres.map((genre, i) => {
          if(selectedSources[i] == true){
            
          }
        })}
      </div>
    </>
  )
}

export default App
