import React from 'react';
import './index.css';
import TodoList from './TodoList';
import SubTitle from './SubTitle';

/**
 * Habit list
 * Add Habit
 * Habit Achieve
 */
const MiniHabit = () => {
    const tasks = [{name: 'First Task'}, { name: 'Second Task'}];
    return (
        <div className='habitWrapper'>
            <SubTitle title={'Today\'s Target'}/>
            <TodoList tasks={tasks}/>
        </div>
    );
}

export default MiniHabit;
