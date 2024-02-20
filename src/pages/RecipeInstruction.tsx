import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/loading/Loading';
import RecipeInfo from 'components/recipeInfo/RecipeInfo';

import { useGetRecipeInfoQuery } from 'services/FoodService';

const RecipeInstruction: FC = () => {
    const { recipeId } = useParams();

    const { data, isLoading, isError } = useGetRecipeInfoQuery(recipeId!);

    const hasDataAndNoError = data && !isError;

    return (
        <div className="container">
            {isLoading ? (
                <Loading />
            ) : hasDataAndNoError ? (
                <RecipeInfo recipeInstruction={data} />
            ) : (
                <div>Error</div>
            )}
        </div>
    );
};

export default RecipeInstruction;
