import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Error from './Pages/Error';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='*' element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default App