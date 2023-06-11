import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/login';
import { HomePage } from './components/home';
import { Select } from './components/Select';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/auth" element={<LoginPage />} />
                <Route exact path="/auth/select" element={<Select />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
