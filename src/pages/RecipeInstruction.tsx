import RecipeInfo from 'components/recipeInfo/RecipeInfo';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRecipeInfoQuery } from 'services/FoodService';

const RecipeInstruction: FC = () => {
    const { recipeId } = useParams();

    const { data, isLoading, isError } = useGetRecipeInfoQuery(recipeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <div>Loading...</div>
            ) : hasDataAndNoError ? (
                <RecipeInfo recipeInstruction={data} />
            ) : (
                <div>Error</div>
            )}
        </div>
    );
};

export default RecipeInstruction;
