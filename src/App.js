import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Search from './Pages/Search';
import IssueABook from './Pages/IssueABook';
import Profile from './Pages/Profile';
import Logout from './functions/Logout';
import Error from './Pages/Error';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/search' element={<Search />}></Route>
                <Route exact path='/issuebook' element={<IssueABook />}></Route>
                <Route exact path='/profile' element={<Profile />}></Route>
                <Route exact path='/logout' element={<Logout />}></Route>
                <Route exact path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default App