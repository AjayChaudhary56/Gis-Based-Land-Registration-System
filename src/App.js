import "./App.css";
import Navbar from "./containers/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/user/search";
import Userdashboard from "./components/user/dashboard";
import Userdashboardedit from "./components/user/dashboard/edit";
import Userownedland from "./components/user/ownedland";
import Useraddland from "./components/user/addland";
import Userrequestland from "./components/user/requestland";
import Usernotification from "./components/user/notification";
function App() {
  return (
    <>
      <Router>
      <Navbar />
      
        <Routes>
        
          <Route path="/user/search" element={<Search />} />
          <Route path="/user/" element={<Search />} />
          <Route path="/user/dashboard" element={<Userdashboard />} />
          <Route path="/user/dashboardedit" element={<Userdashboardedit />} />
          <Route path="/user/ownedland" element={<Userownedland/>} />
          <Route path="/user/addland" element={<Useraddland />} />
          <Route path="/user/requestland" element={<Userrequestland />} />
          <Route path="/user/notification" element={<Usernotification />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
