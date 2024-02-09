import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Home from 'pages/Home';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/italian" element={<Home />} />
                <Route path="/cuisine/japanese" element={<Home />} />
                <Route path="/cuisine/chinese" element={<Home />} />
                <Route path="/cuisine/france" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
