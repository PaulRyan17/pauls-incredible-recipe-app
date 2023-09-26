import { useMemo } from 'react';

export const useFilterRecipes = (
    recipes: any[], // Replace 'any[]' with the actual type of your recipes
    selectedIngredients: string[],
    selectedCookingTime: number,
    numberOfIngredients: number,
    selectedMealType: string
) => {
    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            // Extract recipe ingredients dynamically
            const recipeIngredients = Object.keys(recipe)
                .filter((key) => key.startsWith('strIngredient'))
                .map((key) => recipe[key])
                .filter(Boolean); // Filter out empty values

            // Check if the recipe contains all selected ingredients
            const containsAllIngredients = selectedIngredients.every((ingredient) =>
                recipeIngredients.includes(ingredient)
            );

            // Check if the meal type matches (if selected)
            const mealTypeMatches = !selectedMealType || recipe.mealType === selectedMealType;

            // Check if the cooking time matches or is greater
            const cookingTimeMatches = selectedCookingTime >= recipe.cookingTime;

            // Check if the number of ingredients is less than or equal to the selected number
            const numberOfIngredientsMatches = recipeIngredients.length <= numberOfIngredients;

            return containsAllIngredients && mealTypeMatches && cookingTimeMatches && numberOfIngredientsMatches;
        });
    }, [recipes, selectedIngredients, selectedCookingTime, numberOfIngredients, selectedMealType]);

    return filteredRecipes;
};
