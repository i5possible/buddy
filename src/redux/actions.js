import { GET_HABITS, ADD_HABIT, DELETE_HABIT } from "./actionTypes";
import util from '../utils';

const { client } = util;
let nextHabitId = 0;

export const getHabits = () => dispatch => (
    client.get('/habits').then(response => {
        dispatch({
            type: GET_HABITS,
            data: response.data,
        })
    }).catch(error => {
        return {
            type: GET_HABITS,
            data: []
        }
    })
)


export const addHabit = name => ({
    type: ADD_HABIT,
    data: {
        id: ++nextHabitId,
        name: name,
        frequency: 'daily',
    }
});

export const deleteHabit = name => ({
    type: DELETE_HABIT,
    data: {
        name: name,
    }
})