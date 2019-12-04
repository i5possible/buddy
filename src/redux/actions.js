import { ADD_HABIT } from "./actionTypes";

let nextHabitId = 0;

export const addTodo = content => ({
    type: ADD_HABIT,
    payload: {
        id: ++nextHabitId,
        content
    }
});

