const initialState = {
  minions: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MINION': {
      return {
        ...state,
        minions: state.minions + 1,
      };
    }
    case 'DESTROY_MINION': {
      return {
        ...state,
        minions: state.minions - 1,
      };
    }
    case 'CREATE_TEAM': {
      return {
        ...state,
        minions: state.minions + action.value,
      };
    }
    case 'DESTROY_TEAM': {
      return {
        ...state,
        minions: state.minions - action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
