import { FC } from 'react';

import { IRecipe } from 'types/receipe/receipe';
import { getUniqueIngredients } from 'helpers/getUniqueIngredients';

import styles from './RecipeInfo.module.css';

interface RecipeInfoProps {
    recipeInstruction: IRecipe;
}

const RecipeInfo: FC<RecipeInfoProps> = ({ recipeInstruction }) => {
    const uniqueNameIngredients = getUniqueIngredients(
        recipeInstruction.extendedIngredients,
        'name'
    );
    const uniqueOriginalIngredients = getUniqueIngredients(
        recipeInstruction.extendedIngredients,
        'original'
    );

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{recipeInstruction.title}</h2>
            <div className={styles.info}>
                <img
                    src={recipeInstruction.image}
                    alt={recipeInstruction.title}
                />
                <div className={styles.instruction}>
                    <ul className={styles.name_list}>
                        {uniqueNameIngredients.map((ingredientName) => (
                            <li key={ingredientName}>{ingredientName}</li>
                        ))}
                    </ul>
                    <div>
                        <h3>Ingredients Count:</h3>
                        <ul className={styles.original_list}>
                            {uniqueOriginalIngredients.map(
                                (ingredientOriginal) => (
                                    <li key={ingredientOriginal}>
                                        {ingredientOriginal}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <h3>Description</h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: recipeInstruction.summary,
                    }}
                ></p>
                <h3>Instruction</h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: recipeInstruction.instructions,
                    }}
                ></p>
            </div>
        </div>
    );
};

export default RecipeInfo;
