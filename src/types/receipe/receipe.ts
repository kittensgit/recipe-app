export interface IIngredient {
    id: number;
    image: string;
    name: string;
    original: string;
}

export interface IRecipe {
    id: number;
    title: string;
    image: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    summary: string;
    instructions: string;
    extendedIngredients: IIngredient[];
}

export interface IRecipeApi {
    recipes: IRecipe[];
}

export interface ICuisineApi {
    results: IRecipe[];
}
