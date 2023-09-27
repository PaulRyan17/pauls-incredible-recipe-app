"use client"
import React, { useState } from "react";
import Divider from "../components/divider";

import RecipeSection from "../sections/recipe-section";
import QuantitySection from "../sections/quantity-section";
import MealTypeSection from "../sections/mealtype-section";
import CookingTimeSection from "../sections/cookingtime-section";
import NumIngredientsSection from "../sections/numberingredients-section";

import { State } from "../reducer/reducer";

interface RecipeFormProps {
    state: State;
    dispatch: React.Dispatch<any>;
}

const RecipeForm = ({ state, dispatch }: RecipeFormProps) => {
    const { selectedIngredients, selectedMealType, selectedCookingTime, numberOfIngredients } = state;

    const buildRecipeFormFields = () => {
        if(selectedIngredients.length) {
            return (
                <>
                    <Divider className="my-4" />
                    <p className="text-lg text-white mb-2">
                       Below are some optional fields
                    </p>
                    <div className="flex flex-col gap-5">
                        <CookingTimeSection selectedCookingTime={selectedCookingTime} dispatch={dispatch} />
                        <NumIngredientsSection selectedNumIngredients={numberOfIngredients} dispatch={dispatch} />
                        <MealTypeSection selectedMealType={selectedMealType} dispatch={dispatch} />
                    </div>
                </>
            )   
        }
    }

    const buildContent = () => {
        return (
            <div className="z-10 max-w-5xl w-full justify-between text-sm lg:flex flex-col">
                <RecipeSection selectedIngredients={selectedIngredients} dispatch={dispatch} />
                <Divider className="my-4" />
                {selectedIngredients.length ? <QuantitySection ingredients={selectedIngredients} dispatch={dispatch} /> : ''}
                {buildRecipeFormFields()}
            </div>
        )
    }

    return (
        <div>
            {buildContent()}
        </div>
    );
};

export default RecipeForm;