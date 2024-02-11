import { FC } from 'react';
import { useParams } from 'react-router-dom';

import RecipeCards from 'components/recipeCards/RecipeCards';
import { useGetRecipesByCuisineQuery } from 'services/FoodService';

const Cuisine: FC = () => {
    const { cuisineType } = useParams();

    const { data, isLoading, isError } = useGetRecipesByCuisineQuery(
        cuisineType!
    );

    const hasDataAndNoError = data && !isError;
    return (
        <div className="container">
            {isLoading ? (
                <div>Loading...</div>
            ) : hasDataAndNoError ? (
                <RecipeCards
                    recipes={data.results}
                    title={`${cuisineType} cuisine`}
                />
            ) : (
                <div>Error</div>
            )}
        </div>
    );
};

export default Cuisine;
