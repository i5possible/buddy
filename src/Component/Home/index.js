import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import SubTitle from '../MiniHabit/SubTitle'
import './index.css';
import FlippyCard from './FlippyCard'
import CompleteIcon from '../../Icon/Complete';
import { getHabitTargets, ackHabitTarget } from '../../redux/actions'

const Home = ({ habitTargets, getHabitTargets, ackHabitTarget }) => {

    const createFrontSideContent = name => (<span className="center largeText">
        {name}
    </span>);
    const createBackSideContent = () => (<span className="center">
        <CompleteIcon width={100} height={100} color={'LightSlateGray'} />
    </span>);

    useEffect(() => {
        getHabitTargets();
        return () => { }
    }, []);

    return (
        <div className='targetWrapper'>
            <div className='targetManager'>
                <SubTitle title={habitTargets && habitTargets.length > 0 ? `Habit Targets(${habitTargets.length})` : 'Habit Targets'} />
                <div className='targets'>
                    {habitTargets && habitTargets.length > 0 && habitTargets.map(target => (
                        <FlippyCard frontSideContent={createFrontSideContent(target.name)}
                            backSideContent={createBackSideContent(target.name)}
                            isFlipped={target.ack}
                            key={target.name}
                            toggleEffect={() => ackHabitTarget(target)}
                            style={{ width: `calc(50% - 1rem)`, height: '10rem', margin: '.5rem' }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default connect(state => ({ habitTargets: state.habitTargets }), { getHabitTargets, ackHabitTarget })(Home);
