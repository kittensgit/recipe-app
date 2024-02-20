import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from 'components/loading/Loading';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import {
    LazyCuisinePage,
    LazyHomePage,
    LazyRecipeInstructionPage,
    LazyRecipesByIngredientPage,
    LazySearchedPage,
} from 'lazy/Lazy';
import NotFound from 'components/notfound/NotFound';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <div className="main_wrapp">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<LazyHomePage />} />
                        <Route path="/recipes" element={<LazyHomePage />} />
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
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

export default App;
