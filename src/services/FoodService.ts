import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    ICuisineApi,
    IRecipe,
    IRecipeApi,
    ISearchRecipeApi,
} from 'types/receipe/receipe';

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
                `/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
        getRecipesByIngredients: builder.query<IRecipe[], string>({
            query: (ingredient) =>
                `/recipes/findByIngredients?ingredients=${ingredient}&number=25&apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
        getRecipesByCuisine: builder.query<ICuisineApi, string>({
            query: (cuisineType) =>
                `/recipes/complexSearch?cuisine=${cuisineType}&number=25&apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
        getRecipesBySeacrh: builder.query<ISearchRecipeApi, string>({
            query: (searchQuery) =>
                `/recipes/complexSearch?query=${searchQuery}&number=25&apiKey=${process.env.REACT_APP_API_KEY}`,
        }),
    }),
});

export const {
    useGetPopularByTagQuery,
    useGetRecipeInfoQuery,
    useGetRecipesByIngredientsQuery,
    useGetRecipesByCuisineQuery,
    useGetRecipesBySeacrhQuery,
} = foodApi;
