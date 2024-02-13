import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICuisineApi, IRecipe, IRecipeApi } from 'types/receipe/receipe';

export const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spoonacular.com/recipes/',
    }),
    endpoints: (builder) => ({
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
        getRecipesByCuisine: builder.query<ICuisineApi, string>({
            query: (cuisineType) =>
                `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineType}&number=25&apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
    }),
});

export const {
    useGetPopularByTagQuery,
    useGetRecipeInfoQuery,
    useGetRecipesByIngredientsQuery,
    useGetRecipesByCuisineQuery,
} = foodApi;
