"use client"
import React, { useState } from "react";
import RecipeForm from "../sections/recipe-form";
import { useReducer } from "react";
import { recipeFormReducer, initialState } from "../reducer/reducer";
import RecipeResultPage from "../sections/result-section";

const RecipeFormPage = () => {
    const [state, dispatch] = useReducer(recipeFormReducer, initialState);
    const { selectedIngredients, selectedQuantities, selectedMealType, selectedCookingTime, numberOfIngredients } = state;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[40rem] lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-recipify-dark-500 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center text-white font-mono">
                        RECIPIFY
                    </div>
                    <button
                        className="lg:hidden flex justify-end text-white"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? 'Close' : 'Open'} Filters
                    </button>
                    <div className={`flex flex-1 flex-col ${isSidebarOpen ? 'block' : 'hidden'} lg:flex`}>
                        <RecipeForm state={state} dispatch={dispatch} />
                    </div>
                </div>
            </div>
            <div className="lg:pl-[40rem]">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            {/* Separator */}
                            <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />
                            <svg width="50" height="50" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_814_7048)">
                                    <rect x="35" y="5" width="93" height="93" rx="24" fill="white" />
                                </g>
                                <path d="M77.2643 30.7379L100.506 53.9793C101.58 55.0533 101.58 56.8147 100.506 57.9102C99.4318 58.9842 97.6919 59.0056 96.5964 57.9316L96.5749 57.9102C95.5009 56.8576 93.7825 56.8791 92.7085 57.9316L79.4768 71.1634C78.4028 72.2374 76.6629 72.2374 75.5889 71.1634C74.5149 70.0894 74.5149 68.3495 75.5889 67.2755L88.885 53.9793C89.9161 52.9483 89.9161 51.2514 88.885 50.2203L88.7562 50.0914C87.7251 49.0604 86.0282 49.0604 84.9972 50.0914L65.7725 69.3161C64.6985 70.3901 62.9586 70.3901 61.8846 69.3161C61.3476 68.7791 61.0898 68.0702 61.0898 67.3829C61.0898 66.674 61.3476 65.9867 61.8846 65.4497L81.0663 46.268C81.6033 45.731 81.8611 45.0221 81.8611 44.3348C81.8611 43.6259 81.6033 42.9386 81.0663 42.4016C79.9923 41.3276 78.2524 41.3276 77.1784 42.4016L67.899 51.6809C66.825 52.755 65.0851 52.755 64.0111 51.6809C63.4741 51.1439 63.2164 50.4351 63.2164 49.7477C63.2164 49.0389 63.4956 48.3515 64.0111 47.8145L73.355 38.4707C74.386 37.4397 74.386 35.7427 73.355 34.7117L73.312 34.6687C72.775 34.1317 72.4958 33.4229 72.4958 32.7141C72.4958 32.0052 72.775 31.2964 73.312 30.7594C74.429 29.6639 76.1903 29.6639 77.2643 30.7379Z" fill="#6FBABE" />
                                <path d="M102.072 29.1914C107.764 34.8836 108.43 43.6905 104.07 50.113C103.168 51.4448 101.277 51.6381 100.118 50.4996L80.764 31.1461C79.6256 30.0077 79.7974 28.1174 81.1506 27.1938C87.5732 22.8333 96.38 23.4992 102.072 29.1914Z" fill="#6FBABE" />
                                <path d="M107.071 28.0325C108.136 26.9671 108.136 25.2399 107.071 24.1746C106.006 23.1092 104.278 23.1092 103.213 24.1746C102.148 25.2399 102.148 26.9671 103.213 28.0325C104.278 29.0978 106.006 29.0978 107.071 28.0325Z" fill="#6FBABE" />
                                <rect x="54.9429" y="57.1567" width="6.5122" height="5.44227" rx="2.72114" transform="rotate(-45 54.9429 57.1567)" fill="#6FBABE" />
                                <rect x="53.1455" y="74.2334" width="6.5122" height="5.44227" rx="2.72114" transform="rotate(-45 53.1455 74.2334)" fill="#6FBABE" />
                                <rect x="66.627" y="76.031" width="6.5122" height="5.44227" rx="2.72114" transform="rotate(-45 66.627 76.031)" fill="#6FBABE" />
                                <defs>
                                    <filter id="filter0_d_814_7048" x="0" y="0" width="163" height="163" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="30" />
                                        <feGaussianBlur stdDeviation="17.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.435294 0 0 0 0 0.729411 0 0 0 0 0.745098 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_7048" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_7048" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <RecipeResultPage
                            selectedIngredients={selectedIngredients}
                            selectedQuantities={selectedQuantities}
                            selectedMealType={selectedMealType}
                            selectedCookingTime={selectedCookingTime}
                            numberOfIngredients={numberOfIngredients}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default RecipeFormPage;