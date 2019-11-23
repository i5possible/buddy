import React from 'react';
import './index.css';
import TodoList from './TodoList'

/**
 * Habit list
 * Add Habit
 * Habit Achieve
 */
const MiniHabit = () => {
    const tasks = [{name: 'First Task'}, { name: 'Second Task'}];
    return (
        <>
            <div>
                Today's target
            </div>
            <div>
                <TodoList tasks={tasks}/>
            </div>
        </>
    );
}

export default MiniHabit;
