import React, { useState } from "react";
import Button from "../components/button";

interface MealTypeSectionProps {
    selectedMealType: string;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const MealTypeSection: React.FC<MealTypeSectionProps> = ({ selectedMealType, dispatch }) => {
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
    const [selectedType, setSelectedType] = useState<string>(selectedMealType);

    const handleMealTypeChange = (type: string) => {
        setSelectedType(type);
        // Dispatch an action to update selected meal type in the parent component's state
        dispatch({ type: "SET_MEAL_TYPE", payload: type });
    };

    return (
        <div className="flex flex-col">
            <p className="text-md text-gray-600 mb-2">
                Let's choose a meal type for your recipes.
            </p>
            <div className="flex gap-2 mt-2">
                {mealTypes.map((type, index) => (
                    <Button
                        key={index}
                        type={type === selectedType ? "primary" : "secondary"}
                        onClick={() => handleMealTypeChange(type)}
                    >
                        {type}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MealTypeSection;