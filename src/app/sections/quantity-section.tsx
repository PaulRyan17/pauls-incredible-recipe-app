import React, { useState, useRef } from "react";
import Button from "../components/button";
import Input from "../components/input";

interface QuantitySectionProps {
    ingredients: string[];
    dispatch: React.Dispatch<any>;
}

const QuantitySection: React.FC<QuantitySectionProps> = ({ ingredients, dispatch }) => {
    const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: string }>({});
    const quantitySection = useRef(null);

    const handleQuantityChange = (ingredient: string, quantity: string) => {
        setSelectedQuantities((prevQuantities) => ({
            ...prevQuantities,
            [ingredient]: quantity,
        }));
    };

    const handleNextClick = () => {
        // Dispatch an action to update selected quantities in the parent component's state
        dispatch({ type: "SET_ALL_QUANTITIES", payload: selectedQuantities });
    };

    // Check if all ingredients have valid quantities
    const allIngredientsHaveQuantities = ingredients.every(ingredient => selectedQuantities[ingredient] !== '');

    return (
        <div className="flex flex-col" ref={quantitySection}>
            <p className="text-lg text-gray-600 mb-2">
                Let's specify the quantity of each ingredient you have.
            </p>
            <p className="text-md text-gray-600 mb-3">
                Simply select the quantity for each ingredient you've chosen.
            </p>
            {ingredients.map((ingredient, index) => (
                <div key={index} className="mb-3">
                    <p className="text-gray-800 font-semibold">{ingredient}</p>
                    <Input
                        label={`Quantity of ${ingredient}`}
                        placeholder="Enter quantity"
                        value={selectedQuantities[ingredient]}
                        type="number"
                        onChange={(e: { target: { value: string; }; }) => handleQuantityChange(ingredient, e.target.value)}
                    />
                </div>
            ))}
            <div className="flex justify-end mt-4">
                <Button
                    disabled={!allIngredientsHaveQuantities}
                    onClick={handleNextClick}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default QuantitySection;