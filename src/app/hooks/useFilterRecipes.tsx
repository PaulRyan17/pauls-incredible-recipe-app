import { useMemo } from 'react';

export const useFilterRecipes = (
    recipes: any[], // Replace 'any[]' with the actual type of your recipes
    selectedIngredients: string[],
    selectedCookingTime: number,
    numberOfIngredients: number
) => {
    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            // Extract recipe ingredients dynamically
            const recipeIngredients = Object.keys(recipe)
                .filter((key) => key.startsWith('strIngredient'))
                .map((key) => recipe[key])
                .filter(Boolean); // Filter out empty values
            console.log('recipeIngredients', recipeIngredients)

            // Check if the cooking time matches
            // const cookingTimeMatches = recipe.strInstructions.includes(selectedCookingTime);

            // Check if the number of ingredients matches
            // const numIngredientsMatches = recipeIngredients.length === numberOfIngredients;

            // Check if the recipe contains all selected ingredients
            const containsAllIngredients = selectedIngredients.every((ingredient) =>
                recipeIngredients.includes(ingredient)
            );

            // return containsAllIngredients && cookingTimeMatches && numIngredientsMatches;
            return containsAllIngredients;
        });
    }, [recipes, selectedIngredients, selectedCookingTime, numberOfIngredients]);

    return filteredRecipes;
};
