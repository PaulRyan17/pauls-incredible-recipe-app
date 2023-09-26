import React from "react";
import Badge from "../components/badge";

interface SummaryProps {
    selectedIngredients: string[];
    selectedQuantities: Record<string, number>;
    selectedMealType: string;
    selectedCookingTime: number;
    selectedNumIngredients: number;
}

const Summary: React.FC<SummaryProps> = ({
    selectedIngredients,
    selectedMealType,
    selectedCookingTime,
    selectedNumIngredients,
}) => {
    // Generate a single sentence summary
    const summarySentence = `You've selected ${selectedNumIngredients} ingredients, including ${selectedIngredients.join(
        ", "
    )}, for a ${selectedMealType} meal that takes about ${selectedCookingTime} to cook.`;

    return (
        <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-4">Summary:</p>
            <p className="text-gray-800 mt-2">{summarySentence}</p>
        </div>
    );
};

export default Summary;