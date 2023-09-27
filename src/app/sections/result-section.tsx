import React from 'react';
import { useMeals } from '../hooks/useRecipe';
import { useFilterRecipes } from '../hooks/useFilterRecipes';
import RecipeList from './recipe-list';
import Divider from "../components/divider";

interface RecipeResultPageProps {
    selectedIngredients: string[];
    selectedQuantities: Record<string, number>;
    selectedMealType: string;
    selectedCookingTime: number;
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
    const { mealDetails, loading } = useMeals(selectedIngredients[0]);
    // Use the useFilterRecipes hook to filter the recipes based on selected criteria
    const filteredRecipes = useFilterRecipes(
        mealDetails,
        selectedIngredients,
        selectedCookingTime,
        numberOfIngredients,
        selectedMealType
    );

    const renderRecipeList = () => {
        if(selectedIngredients.length) {
            return (
                <RecipeList
                    meals={filteredRecipes}
                    selectedIngredients={selectedIngredients}
                    selectedQuantities={selectedQuantities}
                    selectedMealType={selectedMealType}
                    selectedCookingTime={selectedCookingTime}
                    loading={loading}
                />
            )
        }
    }

    return (
        <div>
            <div className="flex flex-col gap items-center">
                <p className="text-xl text-gray-600 mb-5">
                    {selectedIngredients[0] ? `Below are all the delicious recipes you can make with ${selectedIngredients[0]} as the main ingredient` : 'Choose a main ingredient to get started'}
                </p>
            </div>
            <Divider className="my-4" />
            {renderRecipeList()}
        </div>
    );
};

export default RecipeResultPage;