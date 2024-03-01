import { FC } from 'react';

import Loading from 'components/loading/Loading';
import Error from 'components/error/Error';
import Search from 'components/search/Search';
import RecipeSplideCards from 'components/recipeSplideCards/RecipeSplideCards';

import { useGetPopularByTagQuery } from 'services/FoodService';
import { capitalize } from 'helpers/capitalize';

const tags = [
    '',
    'dessert',
    'vegetarian',
    'vegan',
    'ketogenic',
    'nut_free',
    'wheat_free',
    'gluten_free',
    'no_added_sugar',
];

const Home: FC = () => {
    return (
        <div className="container">
            <Search />
            {tags.map((tag) => RenderRecipeSplideCards(tag))}
        </div>
    );
};

const RenderRecipeSplideCards = (tag: string) => {
    const { data, isLoading, isError } = useGetPopularByTagQuery(tag);

    if (isLoading) {
        return <Loading key={tag} />;
    }

    if (isError || !data) {
        return <Error key={tag} />;
    }

    return (
        <RecipeSplideCards
            key={tag}
            title={tag ? capitalize(tag).split('_').join(' ') : 'Most popular'}
            recipes={data.recipes}
            countPage={tag ? 4 : 3}
        />
    );
};

export default Home;
