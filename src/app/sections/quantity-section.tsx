import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Badge from "../components/badge";
import Button from "../components/button";
import Input from "../components/input";
import { gsap } from "gsap";
import { useFadeInAnimation } from '../hooks/useFadeAnimation'; // Adjust the import path


interface QuantitySectionProps {
    ingredients: string[];
    dispatch: React.Dispatch<any>; // Update with your specific action type
}

const QuantitySection: React.FC<QuantitySectionProps> = ({ ingredients, dispatch }) => {
    const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: string }>({});
    const quantitySection = useRef(null);

    const handleQuantityChange = (ingredient: string, quantity: string) => {
        setSelectedQuantities((prevQuantities) => ({
            ...prevQuantities,
            [ingredient]: quantity,
        }));

        // Dispatch an action to update quantities in the parent component's state
        // dispatch({ type: "SET_QUANTITY", payload: { ingredient, quantity } });
    };

    const handleNextClick = () => {
        // Dispatch an action to update selected quantities in the parent component's state
        dispatch({ type: "SET_ALL_QUANTITIES", payload: selectedQuantities });
    };

    return (
        <div className="flex flex-col" ref={quantitySection}>
            <p className="text-lg text-gray-600 mb-2">
                Let's specify the quantity of each ingredient you have.
            </p>
            <p className="text-lg text-gray-600 mb-3">
                Simply select the quantity for each ingredient you've chosen.
            </p>
            {ingredients.map((ingredient, index) => (
                <div key={index} className="mb-3">
                    <p className="text-gray-800 font-semibold">{ingredient}</p>
                    <Input
                        label={`Quantity of ${ingredient}`}
                        placeholder="Enter quantity"
                        value={selectedQuantities[ingredient] || ""}
                        onChange={(e: { target: { value: string; }; }) => handleQuantityChange(ingredient, e.target.value)}
                    />
                </div>
            ))}
            <div className="flex gap-2 flex-wrap mt-2">
                {Object.entries(selectedQuantities).map(([ingredient, quantity], index) => (
                    <Badge key={index}>
                        {`${quantity} ${ingredient}`}
                    </Badge>
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <Button
                    disabled={Object.keys(selectedQuantities).length === 0}
                    onClick={handleNextClick}
                >
                    Next
                </Button>
                {/* You can add a "Back" button if needed */}
            </div>
        </div>
    );
};

export default QuantitySection;