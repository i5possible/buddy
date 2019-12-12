import React from 'react';
import { connect } from 'react-redux'
import SubTitle from '../MiniHabit/SubTitle'
import './index.css';
import FlippyCard from './FlippyCard'
import CompleteIcon from '../../Icon/Complete';

const habitTargets = [{ name: 'Mediation' }, { name: 'Reading' }];

const Home = ({ habitTargets }) => {

    const createFrontSideContent = name => (<span className="center largeText">
        {name}
    </span>);
    const createBackSideContent = name => (<span className="center">
        <CompleteIcon width={100} height={100} color={'LightSlateGray'} />
    </span>);


    return (
        <div className='habitWrapper'>
            <div className='habitManager'>
                <SubTitle title={habitTargets && habitTargets.length > 0 ? `Habit Targets(${habitTargets.length})` : 'Habit Targets'} />
                <div className='targets'>
                    {habitTargets && habitTargets.length > 0 && habitTargets.map(target => (
                        <FlippyCard frontSideContent={createFrontSideContent(target.name)}
                            backSideContent={createBackSideContent(target.name)}
                            key={target.name}
                            style={{ width: `calc(50% - .6rem)`, height: '10rem', margin: '.6rem' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {

};

const mapStateToProps = state => {
    console.log(habitTargets);
    return {
        habitTargets: habitTargets,
        // memoryTargets: state.memoryTargets,
        // principles: state.principles,
    }
};

export default connect(mapStateToProps)(Home);
