import { FC } from 'react';

import Search from 'components/search/Search';
import MealCards from 'components/mealCards/MealCards';

import { useGetPopularQuery } from 'services/FoodService';

const Home: FC = () => {
    const { data } = useGetPopularQuery('');
    return (
        <div className="container">
            <Search />
            <MealCards title="Popular" />
        </div>
    );
};

export default Home;
