import { ADD_HABIT } from "./actionTypes";

let nextHabitId = 0;

export const addHabit = name => ({
    type: ADD_HABIT,
    data: {
        id: ++nextHabitId,
        name: name,
    }
});

