import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'
import Movie from '../services/Movie'
import back from '../assets/img/not_image.jpg'

const AboutFilm = ({id}) => {

    const {tv}=Movie('tv')
    const {movies}=Movie('movie')
    const {genre} =Movie('movie')
    const getGenre=(arr)=> {
        console.log(genre)
        let genre_names = [];
        for (let i = 0; i < arr.length; i++) {
            if (genre?.includes(arr[i])){}
            genre_names.push(genre[i]?.name)
        }
        return genre_names.join(',');    
    }
  return (
    <div>
        <Link to="/"><AiOutlineArrowLeft size={'30px'} color={'#362C92'}/></Link>
       {tv.concat(movies).map((item)=> {
            if (item.id===id ) {
                return (
                    <>
                    <div className="w-full mt-[20px] h-[480px]  bg-gradient-to-r from-[#362C92] to-[#126297] opacity-40 rounded-[40px]">
                        <img className='rounded-[20px] mt-[40px] h-[480px] w-full object-cover'  src={item.backdrop_path? `https://image.tmdb.org/t/p/original/${item.backdrop_path}`:back} alt="poster" />
                    </div>
                    <div className="w-[560px] pt-[25px] text-center h-[144px] bg-[#20283E] opacity-80 mt-[-80px] ml-[50px]  rounded-[20px]">
                    <div className="text-[#EBEEF5] text-[32px] ml-[8px] mt-[24px] font-semibold">
                       {item.name || item.title}
                    </div>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-1 gap-[20px] mt-[100px]'>
                        <div className='w-[480px] h-[720px]'>
                            <img className='rounded-[20px] mt-[40px]'  src={item.poster_path? `https://image.tmdb.org/t/p/original/${item.poster_path}`:back} alt="poster" />
                        </div>
                        <div>
                            <p className='text-[#EBEEF5] text-[32px]  mt-[24px] font-semibold'>{item.name || item.title}</p>
                            <p className='text-[#8E95A9] text-[20px]   font-normal'>
                                {item.overview}
                            </p>
                            <div className='w-[59px]  flex content-center justify-center p-[5px] mt-[24px] h-[32px] bg-[#000000] rounded-[12px] text-[#FFAD49] opacity-70 backdrop-blur-[8px] text-[16px]'>{<AiOutlineStar size={'16px'} color={'#FFAD49'}/>}{item.vote_average.toFixed(1) }</div>
                            <div>
                                <p className='text-[#767E94] text-[16px]  mt-[24px] font-normal'>Type</p>
                                <p className='text-[#C3C8D4] text-[20px]   font-normal'>{item.title? 'Movie': 'TV'}</p>
                            </div>
                            <div>
                                <p className='text-[#767E94] text-[16px]  mt-[24px] font-normal'>Release Date:</p>
                                <p className='text-[#C3C8D4] text-[20px]   font-normal'>{item.first_air_date || item.release_date}</p>
                            </div>
                            <div>
                                <p className='text-[#767E94] text-[16px]  mt-[24px] font-normal'>Run time</p>
                                <p className='text-[#C3C8D4] text-[20px]   font-normal'>movie</p>
                            </div>
                            <div>
                                <p className='text-[#767E94] text-[16px]  mt-[24px] font-normal'>Genres</p>
                                <p className='text-[#C3C8D4] text-[20px]   font-normal'>{getGenre(item.genre_ids)}</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
       })}
       
    </div>
    
  )
  
}

export default AboutFilm