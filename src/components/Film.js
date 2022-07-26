import back from '../assets/img/not_image.jpg'
import {AiOutlineStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Film = ({item,setId}) => {
  
  return (
    <Link onClick={()=>setId(item.id)} to="/about">
        <div className="w-[282px] px-[8px] pt-[8px] relative h-[480px] rounded-[12px] bg-[#20283E] backdrop-blur-[80px] transition duration-500 cursor-pointer hover:scale-110">
          <div className='w-[60px] top-[10px] left-[12px] flex content-center justify-center p-[8px]  absolute h-[40px] bg-[#000000] rounded-[12px] text-[#FFAD49] opacity-70 backdrop-blur-[8px]'>{<AiOutlineStar size={'20px'} color={'#FFAD49'}/>}{item.vote_average.toFixed(1) }</div>
          <img className='rounded-[20px]' src={item.poster_path? `https://image.tmdb.org/t/p/w500/${item.poster_path}`:back} alt="back" />
          <div className='text-[#EBEEF5] text-[16px] ml-[8px] mt-[24px] font-semibold'>{item.name || item.title}</div>
        </div>
    </Link>
  )
}

export default Film