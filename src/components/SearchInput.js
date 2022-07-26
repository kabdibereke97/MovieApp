import {IoIosSearch} from 'react-icons/io'

const SearchInput = ({setSearchFilm}) => {
  return (
    <>
    <div className="w-[344px]  h-[64px] px-[16px] bg-[#120F31] border-2  border-solid rounded-[12px] border-[#323B54] flex justify-between content-center  flex-wrap">
      <IoIosSearch size={'32px'} color={'#475069'}/>
      <input onChange={(e)=> setSearchFilm(e.target.value)} type="text" className=" w-[272px]  h-[32px] text-[#475069]  bg-transparent focus:outline-none" placeholder='Search Movies or TV Shows' />
      </div>
    </>
  )
}

export default SearchInput