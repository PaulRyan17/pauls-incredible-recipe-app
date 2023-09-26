import React, { useState } from "react";
import Button from "../components/button";

interface MealTypeSectionProps {
    selectedMealType: string;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const MealTypeSection: React.FC<MealTypeSectionProps> = ({ selectedMealType, dispatch }) => {
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];

    const handleMealTypeChange = (type: string) => {
        // Dispatch an action to update selected meal type in the parent component's state
        dispatch({ type: "SET_MEAL_TYPE", payload: type });
    };

    return (
        <div className="flex flex-col">
            <p className="text-md text-white mb-2">
                Let&rsquo;s choose a meal type for your recipes.
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
                {mealTypes.map((mealType, index) => (
                    <Button
                        key={index}
                        buttonType={mealType === selectedMealType ? "primary" : "secondary"}
                        onClick={() => handleMealTypeChange(mealType)}
                    >
                        {mealType}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default MealTypeSection;