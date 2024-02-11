import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipe, IRecipeApi } from 'types/receipe/receipe';

export const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spoonacular.com/recipes/',
    }),
    endpoints: (builder) => ({
        getPopular: builder.query<IRecipeApi, void>({
            query: () =>
                `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
        }),
        getPopularByTag: builder.query<IRecipeApi, string>({
            query: (tagName) =>
                `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&include-tags=${tagName}`,
        }),
        getRecipeInfo: builder.query<IRecipe, string>({
            query: (recipeId) =>
                `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
        getRecipesByIngredients: builder.query<IRecipe[], string>({
            query: (ingredient) =>
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=25&apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
    }),
});

export const {
    useGetPopularQuery,
    useGetPopularByTagQuery,
    useGetRecipeInfoQuery,
    useGetRecipesByIngredientsQuery,
} = foodApi;
