import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';

import {
    LazyCuisinePage,
    LazyHomePage,
    LazyRecipeInstructionPage,
    LazyRecipesByIngredientPage,
    LazySearchedPage,
} from 'lazy/Lazy';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<LazyHomePage />} />
                    <Route
                        path="/cuisine/:cuisineType"
                        element={<LazyCuisinePage />}
                    />
                    <Route
                        path="/instruction/:recipeId"
                        element={<LazyRecipeInstructionPage />}
                    />
                    <Route
                        path="/recipes/findByIngredients/:ingredient"
                        element={<LazyRecipesByIngredientPage />}
                    />
                    <Route
                        path="/recipes/searched/:searchQuery"
                        element={<LazySearchedPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
