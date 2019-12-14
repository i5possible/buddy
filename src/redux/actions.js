import { GET_HABITS, ADD_HABIT, DELETE_HABIT, GET_HABIT_TARGETS, ACK_HABIT_TARGET } from "./actionTypes";
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
        dispatch({
            type: GET_HABITS,
            data: []
        })
    })
);


export const addHabit = name => dispatch => (
    client.post('/habits', {
        id: nextHabitId,
        name: name,
        frequency: 'daily',
    }).then(response => {
        dispatch({
            type: ADD_HABIT,
            data: response.data,
        })
    })
);

export const deleteHabit = id => dispatch => (
    client.delete(`/habits/${id}`).then(response => {
        dispatch({
            type: DELETE_HABIT,
            id: id,
        })
    })
);

export const getHabitTargets = () => dispatch => (
    client.get(`/habitTargets`).then(response => {
        dispatch({
            type: GET_HABIT_TARGETS,
            data: response.data,
        })
    })
);

export const ackHabitTarget = habit => dispatch => (
    client.put(`/habitTargets/${habit.id}`, {...habit, ack: !habit.ack}).then(response => {
        console.log(response)
        dispatch({
            type: ACK_HABIT_TARGET,
            data: response.data,
        })
    })
)