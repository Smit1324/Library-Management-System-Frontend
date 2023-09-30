import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Search from './Pages/Search';
import IssueBookPage from './Pages/IssueBookPage';
import IssueABook from './Pages/IssueABook';
import ReturnABook from './Pages/ReturnABook';
import Profile from './Pages/Profile';
import Logout from './functions/Logout';
import Error from './Pages/Error';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login />}></Route>
                <Route exact path='/home' element={<Home />}></Route>
                <Route exact path='/search' element={<Search />}></Route>
                <Route exact path='/issuebook' element={<IssueABook />}></Route>
                <Route exact path='/issuebook/:id' element={<IssueBookPage />}></Route>
                <Route exact path='/returnbook/:id' element={<ReturnABook />}></Route>
                <Route exact path='/profile' element={<Profile />}></Route>
                <Route exact path='/logout' element={<Logout />}></Route>
                <Route exact path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default App