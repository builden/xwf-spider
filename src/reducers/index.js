import { combineReducers } from 'redux';
import { SEL_AREA, SEL_SCHTYPE } from '../actions';

function area(state = '福田', action) {
  switch (action.type) {
    case SEL_AREA:
      return action.area;
    default:
      return state;
  }
}

function schtype(state = '小学', action) {
  switch (action.type) {
    case SEL_SCHTYPE:
      return action.schtype;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  area,
  schtype,
});

export default rootReducer;
