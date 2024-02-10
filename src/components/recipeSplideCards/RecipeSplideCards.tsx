import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { IRecipe } from 'types/receipe/receipe';

import RecipeSplideCard from './recipeSplideCard/RecipeSplideCard';

import styles from './RecipeSplideCards.module.css';

interface RecipeSplideCardsProps {
    title?: string;
    recipes: IRecipe[];
    countPage: number;
}

const RecipeSplideCards: FC<RecipeSplideCardsProps> = ({
    title,
    recipes,
    countPage,
}) => {
    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <Splide
                options={{
                    rewind: true,
                    perPage: countPage,
                    perMove: countPage,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    speed: 500,
                }}
            >
                {recipes.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <RecipeSplideCard recipe={recipe} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default RecipeSplideCards;
