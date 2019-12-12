import { GET_HABITS, ADD_HABIT, DELETE_HABIT } from "./actionTypes";
import { client } from './../utils';

let nextHabitId = 0;

export const getHabits = () => dispatch => (
    client.get('/habits').then(response => {
        dispatch({
            type: GET_HABITS,
            data: response.data,
        });
        nextHabitId = response.data.length;
    }).catch(error => {
        return {
            type: GET_HABITS,
            data: []
        }
    })
);


export const addHabit = name => dispatch => (
    client.post('/habits', {
        id: nextHabitId,
        name: name,
        frequency: 'daily',
    }).then(response => {
        console.log(response);
        dispatch({
            type: ADD_HABIT,
            data: {
                id: nextHabitId,
                name: name,
                frequency: 'daily',
            }
        })
    })
);

export const deleteHabit = id => dispatch => (
    client.delete(`/habits/${id}`).then(response => {
        console.log(response);
        dispatch({
            type: DELETE_HABIT,
            id: id
        })
    })
)