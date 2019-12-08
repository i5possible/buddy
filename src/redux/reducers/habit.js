import { ADD_HABIT, DELETE_HABIT, GET_HABITS } from "../actionTypes";

const initialState = {
    habits: [],
};

export default (state = initialState, action) => {
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
        case GET_HABITS: {
            console.log('action:', JSON.stringify(action.data))
            return {
                habits: action.data,
            }
        }
        default:
            return state;
    }
}
