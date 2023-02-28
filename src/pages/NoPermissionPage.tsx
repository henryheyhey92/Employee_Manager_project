import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
interface NoPermissionPageProps {}

const NoPermissionPage: React.FC<NoPermissionPageProps> = (props) => {
    const { isLoggedIn } = React.useContext(LoginContext);

    return (
        <div>
            <h2>No permission page</h2>
            <p>
                Currently you are on the <strong>No permission</strong> page, <p>{!isLoggedIn && 'not'} being logged in</p>.
            </p>
            <p>It does not matter though, since this page is accessible for everybody, being logged in or not.</p>
        </div>
    );
};

export default NoPermissionPage;
