import { useEffect, useState } from 'react';

type Recipe = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
};

export const useMeals = (ingredient: string) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [mealDetails, setMealDetails] = useState<any[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const fetchedRecipes = data.meals || [];
                setRecipes(fetchedRecipes);
                setLoading(false);
                setError(null);

                // Extract meal IDs from fetched recipes
                const mealIds = fetchedRecipes.map((recipe: { idMeal: any; }) => recipe.idMeal);

                // Fetch meal details based on meal IDs
                if (mealIds.length > 0) {
                    const promises = mealIds.map(async (mealId: any) => {
                        const mealResponse = await fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
                        );
                        if (!mealResponse.ok) {
                            throw new Error('Failed to fetch meal details');
                        }
                        const mealData = await mealResponse.json();
                        return mealData.meals[0]; // Assuming there is only one meal for a given ID
                    });

                    const mealDetails = await Promise.all(promises);
                    setMealDetails(mealDetails);
                }
            } catch (err) {
                setError('An error occurred while fetching recipes');
                setLoading(false);
            }
        };

        if (ingredient) {
            fetchRecipes();
        } else {
            setRecipes([]);
            setLoading(false);
        }
    }, [ingredient]);

    return { recipes, mealDetails, loading, error };
};

export default useMeals;
