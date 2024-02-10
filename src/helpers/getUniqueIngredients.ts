import { IIngredient } from 'types/receipe/receipe';

export const getUniqueIngredients = (
    ingredients: IIngredient[],
    property: 'name' | 'original'
) => {
    const uniqueIngredientsSet = new Set<string>();

    return ingredients
        .filter((ingredient) => {
            const value =
                property === 'name' ? ingredient.name : ingredient.original;
            if (!uniqueIngredientsSet.has(value)) {
                uniqueIngredientsSet.add(value);
                return true;
            }
            return false;
        })
        .map((ingredient) =>
            property === 'name' ? ingredient.name : ingredient.original
        );
};
