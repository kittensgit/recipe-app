import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header';
import Loading from 'components/loading/Loading';

import {
    LazyCuisinePage,
    LazyHomePage,
    LazyRecipeInstructionPage,
    LazyRecipesByIngredientPage,
    LazySearchedPage,
} from 'lazy/Lazy';
import Footer from 'components/footer/Footer';

const App: FC = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loading />}>
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
            <Footer />
        </div>
    );
};

export default App;
