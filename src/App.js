import './App.css';
import Navbar from './pagination';
import {BrowseRouter as Router, Routes} from "react-router-dom";
// import Search from './search';
// import Stories from './stories';
// import {useGlobalContext} from './context'
function App() {
  // const data = useGlobalContext();
  return (
    <>
    {/* <div>Hello {data} </div> */}
{/* <Search/> */}
<Router>
<Routes>


<Navbar/>
 {/* <Stories/> */}


</Routes>
</Router>
    </>
  );
}

export default App;
