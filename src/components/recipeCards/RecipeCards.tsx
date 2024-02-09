import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { IRecipe } from 'types/receipe/receipe';

import RecipeCard from './recipeCard/RecipeCard';

import styles from './RecipeCards.module.css';

interface RecipeCardsProps {
    title?: string;
    recipes: IRecipe[];
}

const RecipeCards: FC<RecipeCardsProps> = ({ title, recipes }) => {
    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <Splide
                options={{
                    rewind: true,
                    perPage: 4,
                    perMove: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    speed: 500,
                }}
            >
                {recipes.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default RecipeCards;
