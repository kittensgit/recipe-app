import { FC } from 'react';

import Search from 'components/search/Search';
import RecipeSplideCards from 'components/recipeSplideCards/RecipeSplideCards';

import { useGetPopularByTagQuery } from 'services/FoodService';
import { capitalize } from 'helpers/capitalize';

const tags = ['', 'dessert', 'vegetarian', 'vegan', 'ketogenic', 'snack'];

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
        return <div key={tag}>Loading...</div>;
    }

    if (isError || !data) {
        return <div key={tag}>Occurred error</div>;
    }

    return (
        <RecipeSplideCards
            key={tag}
            title={tag ? capitalize(tag) : 'Most popular'}
            recipes={data.recipes}
            countPage={4}
        />
    );
};

export default Home;
