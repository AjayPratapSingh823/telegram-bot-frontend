// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Weather Bot Admin</h1>
            <a href="https://telegram-bot-ygd7.onrender.com/auth/google" className="login-button">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google Logo" className="google-logo" />
                Login with Google
            </a>
        </div>
    );
};

export default Home;
