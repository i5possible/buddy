import { GET_HABIT_TARGETS } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_HABIT_TARGETS: {
            return action.data;
        }
        default:
            return state;
    }
}
