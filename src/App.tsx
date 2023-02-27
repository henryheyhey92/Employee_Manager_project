import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminPage from './pages/Admin';
import Standard from './pages/Standard';
import Home from './pages/Home';
import Appbar from './components/Appbar';
import AuthContext, { AuthContextType } from './contexts/AuthContext'

interface AppProps {

}

const App: React.FC<AppProps> = (props) => {

    useEffect(() => {

    }, [])

    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    const authContextValue: AuthContextType = {
        isAdmin: isAdmin,
        login: (isAdmin: boolean) => {
            setIsAdmin(isAdmin);
        },
        logout: () => {
            setIsAdmin(false);
        }
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <Router>
                <Appbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/standard' element={<Standard />} />
                </Routes>
            </Router>
        </AuthContext.Provider>

    )
}

export default App;