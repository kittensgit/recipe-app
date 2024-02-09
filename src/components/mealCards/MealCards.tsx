import { FC } from 'react';

import MealCard from './mealCard/MealCard';

interface MealCardsProps {
    title?: string;
}

const MealCards: FC<MealCardsProps> = ({ title }) => {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <MealCard />
            <MealCard />
        </div>
    );
};

export default MealCards;
