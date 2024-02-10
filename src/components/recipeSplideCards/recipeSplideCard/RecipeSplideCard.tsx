import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IRecipe } from 'types/receipe/receipe';

import styles from './RecipeSplideCard.module.css';

interface RecipeSplideCardProps {
    recipe: IRecipe;
}

const RecipeSplideCard: FC<RecipeSplideCardProps> = ({ recipe }) => {
    return (
        <div className={styles.card}>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
            <Link to={`/instruction/${recipe.id}`}>
                <span className={styles.caption}>{recipe.title}</span>
            </Link>
        </div>
    );
};

export default RecipeSplideCard;
