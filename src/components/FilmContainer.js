import Film from "./Film"
import Movie from '../services/Movie'

const FilmContainer = ({isAll,isMovies, isTV,searchFilm,setId}) => {
    
    const {tv}=Movie('tv')
    const {movies}=Movie('movie')

    return (
        <div className='flex flex-wrap gap-[24px] mt-[90px]'>
        {isAll? tv.concat(movies).filter((item)=> (item.name || item.title).toLowerCase().includes(searchFilm)).map((item, index)=> {
            
            return <Film key={index} setId={setId} item={item} />
        }):null}
        {isMovies? movies.filter((item)=> ( item.title).toLowerCase().includes(searchFilm)).map((item, index)=> {
          
            return <Film key={index}  setId={setId}item={item}/>
        }):null}
         {isTV? tv.filter((item)=> ( item.name).toLowerCase().includes(searchFilm)).map((item, index)=> {
            
            return <Film key={index}  setId={setId} item={item} />
        }):null}
        </div>
    )
}

export default FilmContainer
