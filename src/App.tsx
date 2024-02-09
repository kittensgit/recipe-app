import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';

import Home from 'pages/Home';
import Cuisine from 'pages/Cuisine';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:cuisineType" element={<Cuisine />} />
            </Routes>
        </div>
    );
};

export default App;
