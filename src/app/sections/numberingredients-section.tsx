import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";

interface NumIngredientsSectionProps {
    selectedNumIngredients: number;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const NumIngredientsSection: React.FC<NumIngredientsSectionProps> = ({ selectedNumIngredients, dispatch }) => {
    const [numIngredients, setNumIngredients] = useState<number>(selectedNumIngredients);

    const handleNumIngredientsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newNumIngredients = parseInt(event.target.value, 10);
        setNumIngredients(newNumIngredients);
        dispatch({ type: "SET_NUMBER_OF_INGREDIENTS", payload: numIngredients });
    };

    return (
        <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-2">
                Specify the number of ingredients you want in your recipe.
            </p>
            <div className="mt-2">
                <Input
                    label=""
                    type="number"
                    placeholder="Enter the number"
                    value={numIngredients}
                    onChange={handleNumIngredientsChange}
                />
            </div>
        </div>
    );
};

export default NumIngredientsSection;
