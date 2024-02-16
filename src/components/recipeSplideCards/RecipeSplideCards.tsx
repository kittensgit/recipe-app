import { FC, useEffect, useState } from 'react';
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
    const [perPage, setPerPage] = useState(countPage);

    useEffect(() => {
        const updatePerPage = () => {
            const newPerPage =
                window.innerWidth < 500
                    ? 1
                    : window.innerWidth < 760
                    ? 2
                    : window.innerWidth < 900
                    ? 3
                    : countPage;

            setPerPage(newPerPage);
        };
        updatePerPage();
        window.addEventListener('resize', updatePerPage);
        return () => {
            window.removeEventListener('resize', updatePerPage);
        };
    }, [countPage]);

    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <Splide
                options={{
                    rewind: true,
                    perPage: perPage,
                    perMove: perPage,
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
