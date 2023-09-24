// Define TypeScript types for state and actions
type State = {
    selectedIngredients: string[];
    selectedQuantities: Record<string, number>;
    selectedMealType: string;
    selectedCookingTime: string;
    numberOfIngredients: number;
};


type Action =
    | { type: "ADD_INGREDIENT"; payload: Array<string> }
    | { type: "REMOVE_INGREDIENT"; payload: string }
    | { type: "SET_MEAL_TYPE"; payload: string }
    | { type: "SET_COOKING_TIME"; payload: string }
    | { type: "SET_NUMBER_OF_INGREDIENTS"; payload: number }
    | { type: "SET_ALL_QUANTITIES"; payload: Record<string, number> };

export const initialState: State = {
    selectedIngredients: [],
    selectedQuantities: {},
    selectedMealType: "",
    selectedCookingTime: "",
    numberOfIngredients: 0,
};

// Reducer function to handle state updates
export function recipeFormReducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_INGREDIENT":
            return {
                ...state,
                selectedIngredients: [...action.payload],
            };
        case "REMOVE_INGREDIENT":
            return {
                ...state,
                selectedIngredients: state.selectedIngredients.filter(
                    (ingredient) => ingredient !== action.payload
                ),
            };
        case "SET_MEAL_TYPE":
            return {
                ...state,
                selectedMealType: action.payload,
            };
        case "SET_COOKING_TIME":
            return {
                ...state,
                selectedCookingTime: action.payload, // Update the cooking time
            };
        case "SET_NUMBER_OF_INGREDIENTS":
            return {
                ...state,
                numberOfIngredients: action.payload, // Update the number of ingredients
            };
        case "SET_ALL_QUANTITIES":
            return {
                ...state,
                selectedQuantities: action.payload, // Set all quantities at once
            };
        // Handle other action types here
        default:
            return state;
    }
}
