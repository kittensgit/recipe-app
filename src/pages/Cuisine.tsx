import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/loading/Loading';
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
                <Loading />
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
