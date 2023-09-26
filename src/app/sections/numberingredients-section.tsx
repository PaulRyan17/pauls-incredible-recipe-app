import React, { useState } from "react";
import Input from "../components/input";

interface NumIngredientsSectionProps {
    selectedNumIngredients: number;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const NumIngredientsSection: React.FC<NumIngredientsSectionProps> = ({ selectedNumIngredients, dispatch }) => {
    const handleNumIngredientsChange = (numberOfIngredients: number) => {
        dispatch({ type: "SET_NUMBER_OF_INGREDIENTS", payload: numberOfIngredients });
    };

    return (
        <div className="flex flex-col">
            <p className="text-md text-white mb-2">
                Specify the number of ingredients you want in your recipe.
            </p>
            <div className="mt-2">
                <Input
                    placeholder="Enter quantity"
                    value={selectedNumIngredients}
                    type="number"
                    onChange={(e: { target: { value: number; }; }) => handleNumIngredientsChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default NumIngredientsSection;
