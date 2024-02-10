import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';

import Home from 'pages/Home';
import Cuisine from 'pages/Cuisine';
import RecipeInstruction from 'pages/RecipeInstruction';
import RecipesByIngredient from 'pages/RecipesByIngredient';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:cuisineType" element={<Cuisine />} />
                <Route
                    path="/instruction/:recipeId"
                    element={<RecipeInstruction />}
                />
                <Route
                    path="/recipes/findByIngredients/:ingredient"
                    element={<RecipesByIngredient />}
                />
            </Routes>
        </div>
    );
};

export default App;
