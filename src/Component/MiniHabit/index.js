import React, { useReducer } from 'react';
import { connect } from 'react-redux'
import './index.css';
import TodoList from './TodoList';
import SubTitle from './SubTitle';
import utils from '../../utils';

const { isEmpty, saveToLocalStore, getFromLocalStore } = utils;

const MiniHabit = () => {

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
                saveToLocalStore("tasks", newTasks);
                return newTasks;
            default:
                break;
        }
        return tasks;
    }
    const storedTasks = getFromLocalStore("tasks");
    console.log('storedTasks: {}', storedTasks);

    const initialState = isEmpty(storedTasks)
        ? [{ name: 'First Task', completed: false, }, { name: 'Second Task', completed: false }]
        : storedTasks;

    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    console.log(tasks);
    saveToLocalStore("tasks", tasks);

    const remainTasksCount = tasks.filter(task => !task.completed).length;

    return (
        <div className='habitWrapper'>
            <div className='habitList'>
                <SubTitle title={remainTasksCount === 0 ? 'All goal achieved!' : 'Goal to achieve: ' + remainTasksCount} />
                <TodoList tasks={tasks} dispatch={dispatch} />
            </div>
            <div className='habitManager'>
                <SubTitle title='Habit Manager' />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps)(MiniHabit);
