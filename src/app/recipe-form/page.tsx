"use client"
import React, { useReducer, useState } from "react";
import { initialState, recipeFormReducer } from "../reducer/reducer"
import { useRouter } from 'next/navigation'
import Divider from "../components/divider";
import RecipifyLogo from "../components/recipify-logo";

import RecipeSection from "../sections/recipe-section";
import QuantitySection from "../sections/quantity-section";
import MealTypeSection from "../sections/mealtype-section";
import CookingTimeSection from "../sections/cookingtime-section";
import NumIngredientsSection from "../sections/numberingredients-section";
import RecipeResultPage from "../sections/result-section";
import Link from 'next/link'
// import Summary from "../sections/summary-section";
import Button from "../components/button";

const RecipeFormPage = () => {
    const router = useRouter()
    const [state, dispatch] = useReducer(recipeFormReducer, initialState);
    const { selectedIngredients, selectedQuantities, selectedMealType, selectedCookingTime, numberOfIngredients } = state;
    const [resultsPage, showResultsPage] = useState(false);

    const handleResults = () => {
        showResultsPage(true);
    }

    const buildRecipeFormFields = () => {
        if(Object.keys(selectedQuantities).length) {
            return (
                <>
                    <Divider className="my-4" />
                    <p className="text-lg text-gray-600 mb-2">
                       Now we just need some more info
                    </p>
                    <div className="flex flex-col gap-5">
                        <CookingTimeSection selectedCookingTime={selectedCookingTime} dispatch={dispatch} />
                        <NumIngredientsSection selectedNumIngredients={numberOfIngredients} dispatch={dispatch} />
                        <MealTypeSection selectedMealType={selectedMealType} dispatch={dispatch} />
                        {/* <Summary
                            selectedIngredients={state.selectedIngredients}
                            selectedQuantities={state.selectedQuantities}
                            selectedMealType={state.selectedMealType}
                            selectedCookingTime={state.selectedCookingTime}
                            selectedNumIngredients={state.selectedIngredients.length}
                        /> */}
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={handleResults}>
                            Get Recipes
                        </Button>
                    </div>
                </>
            )   
        }
    }

    const buildContent = () => {
        if(!resultsPage) {
            return (
                <div className="z-10 max-w-5xl w-full justify-between text-sm lg:flex flex-col">
                    <div className="flex justify-center">
                        <RecipifyLogo />
                    </div>
                    <RecipeSection selectedIngredients={selectedIngredients} dispatch={dispatch} />
                    <Divider className="my-4" />
                    {selectedIngredients.length ? <QuantitySection ingredients={selectedIngredients} dispatch={dispatch} /> : ''}
                    {buildRecipeFormFields()}
                </div>
            )
        } else {
            return (
                <div className="z-10 max-w-5xl w-full justify-between text-sm lg:flex flex-col">
                    <RecipeResultPage
                        selectedIngredients={selectedIngredients}
                        selectedQuantities={selectedQuantities}
                        selectedMealType={selectedMealType}
                        selectedCookingTime={selectedCookingTime}
                        numberOfIngredients={numberOfIngredients}
                    />
                </div>
            )
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {buildContent()}
        </main>
    );
};

export default RecipeFormPage;