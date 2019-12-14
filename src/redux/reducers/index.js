import { combineReducers } from "redux";
import habit from './habitReducer';
import habitTargets from './habitTargetReducer';

export default combineReducers({ habit, habitTargets });