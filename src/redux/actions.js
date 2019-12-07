import { ADD_HABIT, DELETE_HABIT } from "./actionTypes";

let nextHabitId = 0;

export const addHabit = name => ({
    type: ADD_HABIT,
    data: {
        id: ++nextHabitId,
        name: name,
    }
});

export const deleteHabit = name => ({
    type: DELETE_HABIT,
    data: {
        name: name,
    }
})