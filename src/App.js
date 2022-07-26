import Mainpage from "./components/Mainpage";
import { Routes, Route} from 'react-router-dom';
import AboutFilm from "./components/AboutFilm";
import { useState} from "react";
function App() {
  const [id, setId]=useState(0)
  return (
    <div className="my-0 mx-auto  w-[1200px] h-full py-[30px] ">
        <Routes>
          <Route path='/' element= {<Mainpage setId={setId} />}  />
          <Route path='/about' element= {<AboutFilm id={id}/>} />
        </Routes>
    </div>
  );
}

export default App;
