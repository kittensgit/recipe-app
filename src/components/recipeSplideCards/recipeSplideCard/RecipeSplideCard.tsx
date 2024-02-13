import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IRecipe } from 'types/receipe/receipe';

import triangle from 'assets/triangle.png';

import styles from './RecipeSplideCard.module.css';

interface RecipeSplideCardProps {
    recipe: IRecipe;
}

const RecipeSplideCard: FC<RecipeSplideCardProps> = ({ recipe }) => {
    return (
        <div className={styles.card}>
            {recipe.image && (
                <img
                    className={styles.recipe_img}
                    src={recipe.image}
                    alt={recipe.title}
                />
            )}
            <Link to={`/instruction/${recipe.id}`}>
                <div className={styles.caption_wrap}>
                    <img src={triangle} alt="triangle" />
                    <span className={styles.caption}>{recipe.title}</span>
                </div>
            </Link>
        </div>
    );
};

export default RecipeSplideCard;
