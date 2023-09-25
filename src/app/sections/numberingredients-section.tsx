import React, { useState } from "react";
import Input from "../components/input";
import Slider from "../components/slider";

interface NumIngredientsSectionProps {
    selectedNumIngredients: number;
    selectedIngredientsLength: number;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const NumIngredientsSection: React.FC<NumIngredientsSectionProps> = ({ selectedNumIngredients, dispatch, selectedIngredientsLength }) => {
    const handleNumIngredientsChange = (numberOfIngredients: number) => {
        dispatch({ type: "SET_NUMBER_OF_INGREDIENTS", payload: numberOfIngredients });
    };

    return (
        <div className="flex flex-col">
            <p className="text-md text-gray-600 mb-2">
                Specify the number of ingredients you want in your recipe.
            </p>
            <div className="mt-2">
                <Slider
                    label="ingredients"
                    min={1}
                    max={selectedIngredientsLength}
                    initialValue={selectedNumIngredients}
                    onChange={handleNumIngredientsChange}
                />
            </div>
        </div>
    );
};

export default NumIngredientsSection;
