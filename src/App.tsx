import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminPage from './pages/Admin';
import Standard from './pages/Standard';
import Home from './pages/Home';

interface AppProps {

}

const App: React.FC<AppProps> = (props) => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/standard' element={<Standard />} />
            </Routes>
        </Router>
    )
}

export default App;