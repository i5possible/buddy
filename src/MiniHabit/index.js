import React, { useReducer } from 'react';
import './index.css';
import TodoList from './TodoList';
import SubTitle from './SubTitle';

const isEmpty = (obj) => {
    if (!obj && obj !== 0 && obj !== '') {
        return true;
    }
    if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
        return true;
    }
    if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}

const MiniHabit = () => {

    const saveToLocalStore = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const getFromLocalStore = () => {
        return JSON.parse(localStorage.getItem('tasks'));
    }

    const tasksReducer = (tasks, action) => {
        switch (action.type) {
            case 'check':
                const newTasks = tasks.map(task => {
                    if (task.name === action.task.name) {
                        return {
                            name: task.name,
                            completed: !action.task.completed,
                        }
                    }
                    return task;
                })
                saveToLocalStore(newTasks);
                return newTasks;
            default:
                break;
        }
        return tasks;
    }
    const storedTasks = getFromLocalStore();
    console.log('storedTasks: {}', storedTasks);
    const initialState = isEmpty(storedTasks)
        ? [{ name: 'First Task', completed: false, }, { name: 'Second Task', completed: false }]
        : storedTasks;

    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    console.log(tasks);
    saveToLocalStore(tasks);
    const remainTasksCount = tasks.filter(task => !task.completed).length;

    return (
        <div className='habitWrapper'>
            <SubTitle title={remainTasksCount === 0 ? 'All goal achieved!' : 'Goal to achieve: ' + remainTasksCount} />
            <TodoList tasks={tasks} dispatch={dispatch} />
        </div>
    );
}

export default MiniHabit;
