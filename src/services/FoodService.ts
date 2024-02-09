import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const foodApi = createApi({
    reducerPath: 'foodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spoonacular.com/recipes/',
    }),
    endpoints: (builder) => ({
        getPopular: builder.query({
            query: () =>
                `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
        }),
    }),
});

export const { useGetPopularQuery } = foodApi;
