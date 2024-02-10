import { FC } from 'react';

import Search from 'components/search/Search';
import RecipeCards from 'components/recipeCards/RecipeCards';

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
                    <RecipeCards
                        title="Most popular"
                        recipes={popularRecipes.data.recipes}
                        countPage={3}
                    />
                    <RecipeCards
                        title="Dessert"
                        recipes={dessertRecipes.data.recipes}
                        countPage={4}
                    />
                    <RecipeCards
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
