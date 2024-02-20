import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/loading/Loading';
import RecipeCards from 'components/recipeCards/RecipeCards';
import Search from 'components/search/Search';

import { useGetRecipesBySeacrhQuery } from 'services/FoodService';

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
                <Loading />
            ) : hasDataAndNoError ? (
                <RecipeCards recipes={data.results} title={searchQuery} />
            ) : (
                <div>Occured an error</div>
            )}
        </div>
    );
};

export default Searched;
