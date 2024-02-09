export interface IRecipe {
    id: number;
    title: string;
    image: string;
    cuisines?: string[];
}

export interface IRecipeApi {
    recipes: IRecipe[];
}
