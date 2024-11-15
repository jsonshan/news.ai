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
  const [sources, setSources] = useState([['https://yt3.googleusercontent.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s900-c-k-c0x00ffffff-no-rj', 'cnn'], ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1280px-Fox_News_Channel_logo.svg.png', 'fox'], ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVD42A8Qq2LuigyjvjH07iS-9xTALFaQDgw&s', 'nbc'], ['https://api.time.com/wp-content/themes/time2014/img/time-logo-og.png', 'time'], ['https://pbs.twimg.com/profile_images/1707446114717429760/Bt3mH-ZU_400x400.jpg', 'cbs']])
  const [selectedPage, setSelectedPage] = useState('technology');
  const [genres, setGeneres] = useState(['finance', 'politics', 'world', 'health', 'business', 'environment', 'tech', 'entertainment', 'science', 'history', 'sports']);
  const[selectedSources, setSelectedSources] = useState([true, true, true, true, true, true])
  const [selectedGenre, setSelectedGenre] = useState('politics');
  const [data, setData] = useState()
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
        sources.forEach((source, i) => {
          if (selectedSources[i] === true) {
            fetch(`http://127.0.0.1:5000/summary/${source[1]}/${selectedGenre}`, {
              method: "GET",
          })
              .then(response => {
                  return response.json();
              })
              .then(data => {
                  console.log(data);
                  setData(data)
              })
              .catch(error => console.error("Error fetching data:", error));
          }
          {data && (
            <TextBlock text={JSON.stringify(data)} />
          )}
        })}
      </div>
    </>
  )
}

export default App
