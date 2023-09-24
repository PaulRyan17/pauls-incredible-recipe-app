import React, { useState } from "react";
import useIngredients from "../hooks/useIngredients";
import MultiSelect from "../components/multi-select";
import Badge from "../components/badge";
import Button from "../components/button";

interface RecipeSectionProps {
    selectedIngredients: string[];
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const RecipeSection: React.FC<RecipeSectionProps> = ({ selectedIngredients, dispatch }) => {
    const { ingredients, loading, error } = useIngredients();
    const [localSelectedIngredients, setLocalSelectedIngredients] = useState<string[]>([]);

    const handleMultiSelectChange = (updatedIngredients: string[]) => {
        // Update local state without dispatching
        setLocalSelectedIngredients(updatedIngredients);
    };

    const handleNextClick = () => {
        // Dispatch selected ingredients when "Next" is clicked
        dispatch({ type: "ADD_INGREDIENT", payload: localSelectedIngredients });
    };

    return (
        <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-2">
                Let's get started by finding out what ingredients you have available.
            </p>
            <p className="text-md text-gray-600 mb-3">
                Simply select your ingredients, the first ingredient will be your main ingredient.
            </p>
            <MultiSelect options={ingredients} selected={localSelectedIngredients} onChange={handleMultiSelectChange} />
            <div className="flex gap-2 flex-wrap mt-2">
                {localSelectedIngredients.map((ingredient, index) => (
                    <Badge key={index}>
                        {ingredient}
                    </Badge>
                ))}
            </div>
            <div className="flex justify-end">
                <Button disabled={!localSelectedIngredients.length} onClick={handleNextClick}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default RecipeSection;