"use client"
import React, { useReducer } from "react";
import { initialState, recipeFormReducer } from "../reducer/reducer"
import Divider from "../components/divider";
import RecipifyLogo from "../components/recipify-logo";

import RecipeSection from "../sections/recipe-section";
import QuantitySection from "../sections/quantity-section";

const RecipeFormPage = () => {
    const [state, dispatch] = useReducer(recipeFormReducer, initialState);
    const { selectedIngredients, selectedQuantities, selectedMealType, selectedCookingTime, numberOfIngredients } = state;
    console.log('state', state)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full justify-between text-sm lg:flex flex-col">
               Recipe Results
            </div>
        </main>
    );
};

export default RecipeFormPage;