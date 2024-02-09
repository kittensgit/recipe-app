import { FC } from 'react';

import Search from 'components/search/Search';
import RecipeCards from 'components/recipeCards/RecipeCards';

import { useGetPopularQuery } from 'services/FoodService';

const Home: FC = () => {
    const { data, isLoading, isError } = useGetPopularQuery();

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            <Search />
            {isLoading ? (
                <div>Loading...</div>
            ) : hasDataAndNoError ? (
                <RecipeCards title="Most popular" recipes={data.recipes} />
            ) : (
                <div>Occured error</div>
            )}
        </div>
    );
};

export default Home;
