import React, { useState } from 'react';
import Badge from '../components/badge';
import Modal from '../components/modal';
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
};

interface RecipeListProps {
    meals: Meal[];
}

const RecipeList: React.FC<RecipeListProps> = ({ meals }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null); // Store selected meal
    const toggleModal = () => setIsOpen(!isOpen)

    const openModal = (meal: Meal) => {
        setSelectedMeal(meal);
        setIsOpen(true);
    };

    const renderModal = () => {
        console.log('called', selectedMeal)
        if(selectedMeal && isOpen) {
            return (
                <Modal open={isOpen} onClose={toggleModal} title={selectedMeal.strMeal}>
                    <div className='flex flex-col gap-3'>
                        <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full" />
                        <div className='flex gap-2'>
                            <Badge>{selectedMeal.strArea}</Badge>
                            <Badge>{selectedMeal.strCategory}</Badge>
                        </div>
                        <blockquote className="text-md italic font-semibold text-gray-900">
                            <p>{selectedMeal.strInstructions}</p>
                        </blockquote>
                        <Link href={selectedMeal.strSource}>
                            <span className='text-blue-500'>Source</span>
                        </Link>
                        <Link href={selectedMeal.strYoutube}>
                            <span className='text-blue-500'>Youtube</span>
                        </Link>
                    </div>
                </Modal>
            )
        }
    }


    return (
        <> 
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="relative">
                        <div onClick={() => openModal(meal)} className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="pointer-events-none object-cover group-hover:opacity-75"
                            />
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {meal.strMeal}</span>
                            </button>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                            {meal.strMeal}
                        </p>
                        {meal.strTags && (
                            <div className="mt-1 flex gap-2 flex-wrap">
                                {meal.strTags.split(',').map((tag, index) => (
                                    <Badge key={index}>
                                        {tag.trim()}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {renderModal()}
        </>
    );
};

export default RecipeList;