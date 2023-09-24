import { useEffect, useState } from 'react';

type Ingredient = string;

type IngredientsResponse = {
    meals: { strIngredient: Ingredient }[];
};

const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: IngredientsResponse = await response.json();
                // Extract the list of ingredients from the API response
                const ingredientList: Ingredient[] = data.meals.map((meal) => meal.strIngredient);
                setIngredients(ingredientList);
                setLoading(false);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err);
                }
                setLoading(false);
            }
        };

        fetchIngredients();
    }, []);

    return { ingredients, loading, error };
};

export default useIngredients;