import { FC } from 'react';
import { IRecipe } from 'types/receipe/receipe';

import styles from './RecipeCards.module.css';
import RecipeCard from './recipeCard/RecipeCard';

interface RecipeCardsProps {
    title?: string;
    recipes: IRecipe[];
}

const RecipeCards: FC<RecipeCardsProps> = ({ recipes, title }) => {
    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cards}>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeCards;
