import { useEffect, useState } from 'react';

type Recipe = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    mealType: string;
    cookingTime: number;
};

export const useMeals = (ingredient: string) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [mealDetails, setMealDetails] = useState<any[]>([]);

    // Function to randomize mealType and cookingTime
    const randomizeMealTypeAndTime = () => {
        const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];
        const cookingTimes = [30, 60, 120];
        return {
            mealType: mealTypes[Math.floor(Math.random() * mealTypes.length)],
            cookingTime: cookingTimes[Math.floor(Math.random() * cookingTimes.length)],
        };
    };

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

                // Add mealType and cookingTime to each recipe as the API does not provide this information
                // at least not in a standard way
                const recipesWithDetails: Recipe[] = fetchedRecipes.map((recipe: { idMeal: any; }) => {
                    const { mealType, cookingTime } = randomizeMealTypeAndTime();
                    return { ...recipe, mealType, cookingTime };
                });

                setRecipes(recipesWithDetails);
                setLoading(false);
                setError(null);

                // Extract meal IDs from fetched recipes
                const mealIds = recipesWithDetails.map((recipe: { idMeal: any; }) => recipe.idMeal);

                // Fetch meal details based on meal IDs
                // Fetch meal details based on meal IDs and add mealType and cookingTime
                if (mealIds.length > 0) {
                    const promises = mealIds.map(async (mealId: any) => {
                        const mealResponse = await fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
                        );
                        if (!mealResponse.ok) {
                            throw new Error('Failed to fetch meal details');
                        }
                        const mealData = await mealResponse.json();
                        const { mealType, cookingTime } = randomizeMealTypeAndTime();
                        return { ...mealData.meals[0], mealType, cookingTime };
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
