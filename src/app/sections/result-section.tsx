import React from 'react';
import { useMeals } from '../hooks/useRecipe';
import { useFilterRecipes } from '../hooks/useFilterRecipes';
import RecipeList from './recipe-list';
import RecipifyLogo from "../components/recipify-logo";
import Divider from "../components/divider";

interface RecipeResultPageProps {
    selectedIngredients: string[];
    selectedQuantities: Record<string, number>;
    selectedMealType: string;
    selectedCookingTime: string;
    numberOfIngredients: number;
}

const RecipeResultPage: React.FC<RecipeResultPageProps> = ({
    selectedIngredients,
    selectedQuantities,
    selectedMealType,
    selectedCookingTime,
    numberOfIngredients,
}) => {
    // get the recipes based on the main ingredient - this will also give us meals ids
    const { mealDetails, loading, error } = useMeals(selectedIngredients[0]);
    console.log('meal details are ', mealDetails);
    // Use the useFilterRecipes hook to filter the recipes based on selected criteria
    const filteredRecipes = useFilterRecipes(
        mealDetails, // You may need to replace 'mealDetails' with the actual data structure
        selectedIngredients,
        selectedCookingTime,
        numberOfIngredients
    );
    console.log('filtered recipes are ', filteredRecipes);

    return (
        <div>
            <div className="flex flex-col gap items-center">
                <RecipifyLogo />
                <p className="text-xl text-gray-600 mb-5">
                    Let's get cooking!
                </p>
            </div>
            <Divider className="my-4" />
             <p className="text-md text-gray-600 mb-5 text-center font-bold">
                Below are the meals that you can make with the ingredients you have
            </p>
            <RecipeList meals={mealDetails} />
        </div>
    );
};

export default RecipeResultPage;