import { ADD_HABIT, DELETE_HABIT } from "../actionTypes";

const initialState = {
    habits: [],
};

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_HABIT: {
            return {
                habits: [...state.habits, action.data],
            };
        }
        case DELETE_HABIT: {
            return {
                habits: state.habits.filter(habit => habit.name !== action.data.name),
            };
        }
        default:
            return state;
    }
}
