import React, { useEffect, useState } from "react";
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Reset from "./components/Reset/Reset";

import { auth } from "./firebase";
import TaskCreation from "./components/TaskCreation/TaskCreation";

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ='/login' element= {<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/task" element={<TaskCreation />} />
          <Route path="/" element={<Home  name={userName}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
