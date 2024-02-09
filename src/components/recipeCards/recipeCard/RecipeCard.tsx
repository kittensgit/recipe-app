import { FC } from 'react';
import { IRecipe } from 'types/receipe/receipe';

import styles from './RecipeCard.module.css';

interface RecipeCardProps {
    recipe: IRecipe;
}
const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    return <div className={styles.card}>{recipe.title}</div>;
};

export default RecipeCard;
