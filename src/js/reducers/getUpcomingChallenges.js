export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

const initialState = {
  data: [],
  loaded: false
};

export default function getUpcomingChallenges(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SUCCESS: {
      return {
        ...state,
        loaded: true,
        data: action.data.filter(i=>i.status==="UPCOMING")
      };
    }
    case LOAD_FAILURE: {
      return {
        ...state,
        loaded: true,
        data: []
      };
    }
    default:
      return state;
  }
}

export function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data: data.response
  }
}

export function loadFailure(error) {
  console.log('Failed. ' + error);
  return {
    type: LOAD_FAILURE
  }
}