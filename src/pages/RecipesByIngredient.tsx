import { FC } from 'react';
import { useParams } from 'react-router-dom';

import RecipeCards from 'components/recipeCards/RecipeCards';
import Loading from 'components/loading/Loading';

import { useGetRecipesByIngredientsQuery } from 'services/FoodService';

const RecipesByIngredient: FC = () => {
    const { ingredient } = useParams();
    const { data, isLoading, isError } = useGetRecipesByIngredientsQuery(
        ingredient!
    );

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <RecipeCards recipes={data} title={ingredient} />
            ) : (
                <div>Error</div>
            )}
        </div>
    );
};

export default RecipesByIngredient;
