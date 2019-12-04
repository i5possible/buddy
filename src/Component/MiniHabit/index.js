import React, { useState } from 'react';
import { connect } from 'react-redux'
import './index.css';
import SubTitle from './SubTitle';
import { addHabit } from "../../redux/actions";
import Item from "./Item";

const MiniHabit = ({ habits, addHabit }) => {

    const [input, setInput] = useState("");

    const updateInput = input => {
        setInput(input);
    }

    const handleAddHabit = () => {
        console.log(input);
        addHabit(input);
        setInput("");
    }

    return (
        <div className='habitWrapper'>
            <div className='habitManager'>
                <SubTitle title='Habit Manager' />
                <input value={input} onChange={e => updateInput(e.target.value)}></input>
                <button onClick={handleAddHabit}>Add Habit</button>
                <div className='tasks'>
                    {habits.length > 0 && habits.map(habit => (
                        <Item key={habit.name} task={habit} onClick={() => {}}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default connect(state => ({ habits: state.habit.habits }), { addHabit })(MiniHabit);
