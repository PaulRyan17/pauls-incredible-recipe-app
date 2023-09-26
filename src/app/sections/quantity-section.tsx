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
        // Create an object with all quantities and dispatch it
        const allQuantities = { ...selectedQuantities, [ingredient]: quantity };
        dispatch({ type: "SET_ALL_QUANTITIES", payload: allQuantities });
    };

    return (
        <div className="flex flex-col" ref={quantitySection}>
            <p className="text-lg text-white mb-2">
                Let&rsquo;s specify the quantity of each ingredient you have.
            </p>
            <p className="text-md text-white  mb-3">
                Simply select the quantity for each ingredient you&rsquo;ve chosen.
            </p>
            {ingredients.map((ingredient, index) => (
                <div key={index} className="mb-3">
                    <p className="text-white font-semibold">{ingredient}</p>
                    <Input
                        label={`Quantity of ${ingredient}`}
                        placeholder="Enter quantity"
                        value={selectedQuantities[ingredient]}
                        type="number"
                        onChange={(e: { target: { value: string; }; }) => handleQuantityChange(ingredient, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default QuantitySection;