import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRecipeApi } from 'types/receipe/receipe';

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
    }),
});

export const { useGetPopularQuery, useGetPopularByTagQuery } = foodApi;
