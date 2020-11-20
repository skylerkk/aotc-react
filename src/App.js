import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar";
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Anime from './Components/Anime';
import { AppProvider } from './Utilities/AppContext'

function App() {


  const pages = [
    { readableName: "YourAnimeList", url: "" },
    { readableName: "Sign up", url: "signup" },
    { readableName: "Login", url: "login" }
  ]

  const [loginToken, setToken] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const pageSet = (newPageNum) => {
    setCurrentPage(newPageNum);
    window.localStorage.setItem("currentPage", JSON.stringify(newPageNum));
  }
  useEffect(() => {
    let spage = window.localStorage.getItem("currentPage");
    if (spage !== currentPage) {
      setCurrentPage(JSON.parse(spage));
    }
  }, [currentPage]);


  return (
    <Router>
      <AppProvider value={{ loginToken, setToken }}>
        <Navbar
          pages={pages}
          currentPage={currentPage}
          setPage={pageSet}
        />
        <div>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/anime/:idnum">
              <Anime />
            </Route>
            <Route exact={true} path="/signup">
              <Signup />
            </Route>
            <Route exact={true} path="/login">
              <Login/>
            </Route>
            <Route exact={true} path="/profile">
              <Profile/>
            </Route>
          </Switch>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
