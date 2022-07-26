import SearchInput from "./SearchInput"
import FilterButtons from "./FilterButtons"
import FilmContainer from "./FilmContainer"


import { useState} from "react";
const Mainpage = ({setId}) => {
    const [isAll, setIsAll]=useState(true)
    const [isMovies, setIsMovies]=useState(false)
    const [isTV, setIsTV]=useState(false)
    const [searchFilm, setSearchFilm] =useState('')
  return (
    <div >
      <SearchInput setSearchFilm={setSearchFilm}/>
      <FilterButtons isAll={isAll} 
                      isMovies={isMovies} 
                      isTV={isTV} 
                      setIsAll={setIsAll} 
                      setIsMovies={setIsMovies}
                      setIsTV={setIsTV} />
      <FilmContainer isAll={isAll} 
                      isMovies={isMovies} 
                      isTV={isTV} 
                      setIsAll={setIsAll} 
                      setIsMovies={setIsMovies}
                      setIsTV={setIsTV}
                      searchFilm={searchFilm.toLowerCase()}
                      setId={setId}
                      />
    </div>
  )
}

export default Mainpage