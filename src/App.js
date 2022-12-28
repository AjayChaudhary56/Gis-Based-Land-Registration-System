import "./App.css";
import Navbar from "./containers/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usersidebar from "./containers/sidebar";
import Search from "./components/user/search";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
         
          <Route path="/user" element={<Usersidebar />} />
          <Route path="/user/search" element={<Search />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
