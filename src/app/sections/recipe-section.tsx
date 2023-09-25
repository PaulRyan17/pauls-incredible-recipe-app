import React from "react";
import useIngredients from "../hooks/useIngredients";
import MultiSelect from "../components/multi-select";
import Badge from "../components/badge";

interface RecipeSectionProps {
    selectedIngredients: string[];
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const RecipeSection: React.FC<RecipeSectionProps> = ({ selectedIngredients, dispatch }) => {
    const { ingredients } = useIngredients();

    const handleMultiSelectChange = (updatedIngredients: string[]) => {
        dispatch({ type: "ADD_INGREDIENT", payload: updatedIngredients });
    };

    return (
        <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-2">
                Let's get started by finding out what ingredients you have available.
            </p>
            <p className="text-md text-gray-600 mb-3">
                Simply select your ingredients, the first ingredient will be your main ingredient.
            </p>
            <MultiSelect options={ingredients} selected={selectedIngredients} onChange={handleMultiSelectChange} />
            <div className="flex gap-2 flex-wrap mt-2">
                {selectedIngredients.map((ingredient, index) => (
                    <Badge key={index}>
                        {ingredient}
                    </Badge>
                ))}
            </div>
        </div>
    );
};

export default RecipeSection;