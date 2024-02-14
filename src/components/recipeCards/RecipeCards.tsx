import { FC } from 'react';
import { IRecipe, ISeacrhRecipe } from 'types/receipe/receipe';

import RecipeCard from './recipeCard/RecipeCard';

import styles from './RecipeCards.module.css';

interface RecipeCardsProps {
    title?: string;
    recipes: IRecipe[] | ISeacrhRecipe[];
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
