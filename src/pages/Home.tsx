import { FC } from 'react';

import Search from 'components/search/Search';
import RecipeSplideCards from 'components/recipeSplideCards/RecipeSplideCards';

import {
    useGetPopularByTagQuery,
    useGetPopularQuery,
} from 'services/FoodService';

const Home: FC = () => {
    const popularRecipes = useGetPopularQuery();
    const dessertRecipes = useGetPopularByTagQuery('dessert');
    const veggyRecipes = useGetPopularByTagQuery('vegetarian');

    const hasDataAndNoError =
        popularRecipes.data &&
        dessertRecipes.data &&
        veggyRecipes.data &&
        !popularRecipes.isError &&
        !veggyRecipes.isError &&
        !dessertRecipes.isError;

    return (
        <div className="container">
            <Search />
            {popularRecipes.isLoading ? (
                <div>Loading...</div>
            ) : hasDataAndNoError ? (
                <>
                    <RecipeSplideCards
                        title="Most popular"
                        recipes={popularRecipes.data.recipes}
                        countPage={3}
                    />
                    <RecipeSplideCards
                        title="Dessert"
                        recipes={dessertRecipes.data.recipes}
                        countPage={4}
                    />
                    <RecipeSplideCards
                        title="Vegetarian"
                        recipes={veggyRecipes.data.recipes}
                        countPage={4}
                    />
                </>
            ) : (
                <div>Occured error</div>
            )}
        </div>
    );
};

export default Home;
