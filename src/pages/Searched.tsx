import { FC } from 'react';
import { useParams } from 'react-router-dom';

import RecipeCards from 'components/recipeCards/RecipeCards';

import { useGetRecipesBySeacrhQuery } from 'services/FoodService';
import Search from 'components/search/Search';

const Searched: FC = () => {
    const { searchQuery } = useParams();

    const { data, isLoading, isError } = useGetRecipesBySeacrhQuery(
        searchQuery!
    );

    const hasDataAndNoError = data && !isError;
    return (
        <div className="container">
            <Search />
            {isLoading ? (
                <div>Loading...</div>
            ) : hasDataAndNoError ? (
                <RecipeCards recipes={data.results} />
            ) : (
                <div>Occured an error</div>
            )}
        </div>
    );
};

export default Searched;
