import { TAB_SWITCH } from '../actions';

const Tabs = (state = { openTab: 'home' }, action) => {
  switch (action.type) {
    case TAB_SWITCH:
      return { ...state, openTab: action.value };
    default:
      return state;
  }
};

export default Tabs;
