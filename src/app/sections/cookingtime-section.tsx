import React, { useState } from "react";
import Slider from "../components/slider";

interface CookingTimeSectionProps {
    selectedCookingTime: number;
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const CookingTimeSection: React.FC<CookingTimeSectionProps> = ({ selectedCookingTime, dispatch }) => {
    const [cookingTime, setCookingTime] = useState<number>(selectedCookingTime);

    const handleCookingTimeChange = (cookingTime: number) => {
        setCookingTime(cookingTime);
        dispatch({ type: "SET_COOKING_TIME", payload: cookingTime });
    };

    return (
        <div className="flex flex-col">
            <p className="text-md text-white mb-2">
                Let&rsquo;s specify the maximum cooking time for your recipes (in minutes).
            </p>
            <div className="mt-2">
                <Slider
                    label="minutes"
                    min={0}
                    max={120}
                    initialValue={cookingTime}
                    onChange={handleCookingTimeChange}
                />
            </div>
        </div>
    );
};

export default CookingTimeSection;