import React from 'react';
import Badge from '../components/badge';
import Link from 'next/link';

type Meal = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strTags: string;
    strArea: string;
    strCategory: string;
    strInstructions: string;
    strSource: string;
    strYoutube: string;
    [key: string]: string;
    mealType: string;
    cookingTime: any;
};

interface RecipeListProps {
    meals: Meal[];
    selectedIngredients: string[];
    selectedQuantities: Record<string, number>;
    selectedMealType: string;
    selectedCookingTime: number;
    loading?: boolean;
}

const RecipeList: React.FC<RecipeListProps> = ({ meals, selectedIngredients, selectedQuantities, selectedMealType, selectedCookingTime, loading }) => {
    if (loading) {
        return (
            <div>
                Fetching delicious recipes...
            </div>
        )
    }
    if  (!meals.length && selectedIngredients.length) {
        return (
            <div className='text-center mt-5 text-lg'>
                Hmmm, looks like there are no recipes that match your criteria. Try changing your filters.
            </div>
        )
    }
    return (
        <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8">
            {meals.map((meal) => (
                <li key={meal.idMeal} className="relative">
                    <div className="flex gap-5 group w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        <div className="flex-shrink-0 w-1/3 relative h-40">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="pointer-events-none object-cover group-hover:opacity-75 absolute inset-0 w-full h-full"
                                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                            />
                        </div>
                        <div className='flex flex-col p-2 gap-2'>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    {meal.strMeal}
                                    <Link href={meal.strYoutube} target='_blank'>
                                        <img src="youtube.svg" alt="youtube" className="w-5 h-5" />
                                    </Link>
                                </div>
                                {meal.strTags && (
                                    <div className="mt-1 flex gap-2 flex-wrap">
                                        {meal.strTags.split(',').map((tag, index) => (
                                            <Badge key={index}>{tag.trim()}</Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className='text-gray-500 mb-2'>Ingredients Needed</div>
                                <div className='flex gap-2 flex-wrap'>
                                    {/* Use a nested map to iterate through ingredients and measurements */}
                                    {Array.from({ length: 20 }).map((_, index) => {
                                        const ingredient = meal[`strIngredient${index + 1}`];
                                        const measure = meal[`strMeasure${index + 1}`];
                                        if (ingredient && measure) {
                                            const lowercaseIngredient = ingredient.toLowerCase();
                                            const isIngredientSelected = selectedIngredients.some(selectedIngredient =>
                                                selectedIngredient.toLowerCase() === lowercaseIngredient
                                            );
                                            const isQuantityCorrect = selectedQuantities[ingredient] >= parseInt(measure,10);
                                
                                            let badgeColor = 'gray'; // Default to gray
                                            if (isIngredientSelected && isQuantityCorrect) {
                                                badgeColor = 'primary'; // Both correct ingredient and quantity
                                            } else if (isIngredientSelected) {
                                                badgeColor = 'orange'; // Correct ingredient but incorrect quantity
                                            }
                                
                                            return (
                                                <Badge color={badgeColor} key={index}>{`${measure} ${ingredient}`}</Badge>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                            <div className='flex gap-2 mt-5'>
                                <Badge color={selectedCookingTime >= meal.cookingTime ? 'primary' : 'gray'}>{meal.cookingTime} minutes</Badge>
                                <Badge color={selectedMealType === meal.mealType ? 'primary' : 'gray'}>{meal.mealType}</Badge>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default RecipeList;