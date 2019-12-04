import { ADD_HABIT } from "../actionTypes";

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
        default:
            return state;
    }
}
