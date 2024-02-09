import { FC } from 'react';

import { IRecipe } from 'types/receipe/receipe';

import MealCard from '../components/recipeCards/recipeCard/RecipeCard';

import styles from './MealCards.module.css';

interface MealCardsProps {
    title?: string;
    recipes: IRecipe[];
}

const MealCards: FC<MealCardsProps> = ({ title, recipes }) => {
    return (
        <div className={styles.mealCards}>
            {title && <h2>{title}</h2>}
            {recipes.map((recipe) => (
                <MealCard recipe={recipe} />
            ))}
        </div>
    );
};

export default MealCards;
