

const FilterButtons = ({isAll, setIsAll,isMovies, setIsMovies,isTV, setIsTV}) => {
    const getContentWithButton =(filter)=> {
        if (filter=='All') {
            setIsMovies(false)
            setIsTV(false)
            setIsAll(true)
        }
        if (filter=='Movies') {
            setIsMovies(true)
            setIsTV(false)
            setIsAll(false)
        }
        if (filter=='TV') {
            setIsMovies(false)
            setIsTV(true)
            setIsAll(false)
        }
    }
    const changeStyleOFButton =(filter)=> {
        if(filter) {
            return 'bg-[#7B6EF6] transition duration-500   w-fit px-[32px] h-[40px] rounded-[8px] text-white'
        }else {
            return 'bg-transparent   w-fit px-[32px] h-[40px] text-[#8E95A9]'
        }
    }
  return (
    <div className='w-[368px] h-[56px] p-[8px] rounded-[12px] bg-[#120F31] mt-[80px] '>
        <button onClick={()=>getContentWithButton('All')} className={changeStyleOFButton(isAll)}>All</button>
        <button onClick={()=>getContentWithButton('Movies')} className={changeStyleOFButton(isMovies)}>Movies</button>
        <button onClick={()=>getContentWithButton('TV')} className={changeStyleOFButton(isTV)}>TV Shows</button>
    </div>
  )
}

export default FilterButtons