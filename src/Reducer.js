const initHand = [
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
];

const initHold = [false, false, false, false, false];

export const initReducer = {
  phase: 0,
  deck: [],
  hand: [...initHand],
  held: [...initHold],
};

const Reducer = function (state, action) {
  switch (action.type) {
    case "DEAL_HAND": {
      return {
        ...state,
        hand: action.afterDeal.hand,
        deck: action.afterDeal.deck,
        held: [...initHold],
      };
    }

    case "DRAW_HAND": {
      return {
        ...state,
        hand: action.payload.hand,
        deck: action.payload.deck,
      };
    }

    case "TOGGLE_HOLD": {
      return {
        ...state,
        held: [...action.holdState],
      };
    }

    case "PHASE_CHANGE": {
      return {
        ...state,
        phase: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
