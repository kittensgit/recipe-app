import { lazy } from 'react';

export const LazyHomePage = lazy(() => import('pages/Home'));
export const LazyCuisinePage = lazy(() => import('pages/Cuisine'));
export const LazyRecipeInstructionPage = lazy(
    () => import('pages/RecipeInstruction')
);
export const LazyRecipesByIngredientPage = lazy(
    () => import('pages/RecipesByIngredient')
);
export const LazySearchedPage = lazy(() => import('pages/Searched'));
