import React, { useState } from 'react';
import { connect } from 'react-redux'
import './index.css';
import SubTitle from './SubTitle';
import { addHabit, deleteHabit } from "../../redux/actions";
import Item from "./Item";
import { isEmpty } from "../../utils";

const MiniHabit = ({ habits, addHabit, deleteHabit }) => {

    const [input, setInput] = useState("");

    const updateInput = input => {
        setInput(input);
    }

    const hasHabit = () => {
        return habits.find(habit => habit.name === input.trim())
    }

    const handleAddHabit = () => {
        setInput("");
        if (isEmpty(input) || hasHabit()) {
            return;
        }
        addHabit(input);
    }

    const handleDeleteHabit = name => {
        deleteHabit(name);
    }

    return (
        <div className='habitWrapper'>
            <div className='habitManager'>
                <SubTitle title={habits.length > 0 ? `Habit Manager(${habits.length})` : 'Habit Manager'} />
                <div className= 'inputWrapper'>
                    <input className='habitInput' value={input} onChange={e => updateInput(e.target.value)}></input>
                    <button className='addHabitButton' onClick={handleAddHabit}>Add Habit</button>
                </div>
                <div className='items'>
                    {habits.length > 0 && habits.map(habit => (
                        <Item key={habit.name} item={habit} onClick={() => { }} onDeleteClick={handleDeleteHabit}/>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default connect(state => ({ habits: state.habit.habits }), { addHabit, deleteHabit })(MiniHabit);
