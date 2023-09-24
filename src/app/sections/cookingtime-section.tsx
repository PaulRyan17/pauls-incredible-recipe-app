import React, { useState } from "react";
import Slider from "../components/slider";
import Button from "../components/button";

interface CookingTimeSectionProps {
    selectedCookingTime: string;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const CookingTimeSection: React.FC<CookingTimeSectionProps> = ({ selectedCookingTime, dispatch }) => {
    const [cookingTime, setCookingTime] = useState<string>(selectedCookingTime);

    const handleCookingTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCookingTime(value);
        dispatch({ type: "SET_COOKING_TIME", payload: value });
    };

    return (
        <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-2">
                Let's specify the maximum cooking time for your recipes (in minutes).
            </p>
            <div className="mt-2">
                <Slider
                    min={0}
                    max={120}
                    value={cookingTime}
                    onChange={handleCookingTimeChange}
                />
            </div>
        </div>
    );
};

export default CookingTimeSection;