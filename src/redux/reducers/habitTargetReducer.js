import { GET_HABIT_TARGETS, ACK_HABIT_TARGET } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_HABIT_TARGETS: {
            return action.data;
        }
        case ACK_HABIT_TARGET: {
            return state.map(target => {
                if (target.name === action.data.name) {
                    return {
                        ...target,
                        ack: action.data.ack,
                    }
                }
                return target;
            });
        }
        default:
            return state;
    }
}
