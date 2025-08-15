import React from 'react';
import { useAuth } from '../context/AuthContext';

const ChildDash = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1> Dashboard for Child </h1>
            { currentUser ? (
                <p> Welcome, {currentUser.email} </p>
            ) : (
                <p> Loading user data...</p>
            )}
        </div>
    );
};

export default ChildDash;