import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IRecipe, ISeacrhRecipe } from 'types/receipe/receipe';

import triangle from 'assets/triangle.png';

import styles from './RecipeCard.module.css';

interface RecipeCardProps {
    recipe: IRecipe | ISeacrhRecipe;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <Link to={`/instruction/${recipe.id}`}>
            <div className={styles.card}>
                <img src={recipe.image} alt={recipe.title} />
                <div className={styles.caption}>
                    <img src={triangle} alt="triangle" />
                    <span>{recipe.title}</span>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
