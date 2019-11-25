import React, { useReducer } from 'react';
import './index.css';
import TodoList from './TodoList';
import SubTitle from './SubTitle';

const MiniHabit = () => {
    const tasksReducer = (tasks, action) => {
        console.log(action);
        console.log(tasks);
        switch (action.type) {
            case 'check':
                return tasks.map(task => {
                    if (task.name === action.task.name) {
                        return {
                            name: task.name,
                            completed: !action.task.completed,
                        }
                    }
                    return task;
                })

            default:
                break;
        }
        return tasks;
    }

    const initialState = [{ name: 'First Task', completed: false, }, { name: 'Second Task', completed: false }];

    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    console.log(tasks);
    const remainTasksCount = tasks.filter(task => !task.completed).length;

    return (
        <div className='habitWrapper'>
            <SubTitle title={remainTasksCount === 0 ? 'All goal achieved!' : 'Goal to achieve: ' + remainTasksCount} />
            <TodoList tasks={tasks} dispatch={dispatch} />
        </div>
    );
}

export default MiniHabit;
