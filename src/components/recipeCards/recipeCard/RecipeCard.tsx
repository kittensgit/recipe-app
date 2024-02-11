import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IRecipe } from 'types/receipe/receipe';

import styles from './RecipeCard.module.css';

interface RecipeCardProps {
    recipe: IRecipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className={styles.card}>
            <img src={recipe.image} alt={recipe.title} />
            <Link to={`/instruction/${recipe.id}`}>
                <span className={styles.caption}>{recipe.title}</span>
            </Link>
        </div>
    );
};

export default RecipeCard;
