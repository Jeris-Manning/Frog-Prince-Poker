import { jbPays } from "./Utility/payouts";

const initHand = [
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
  { idx: "blank" },
];

const initHold = [false, false, false, false, false];

export const initReducer = {
  loadedGame: "Jacks or Better",
  pays: new Map([...jbPays]),
  wager: 1,
  credit: 0,
  coin: "quarter",
  showCash: false,
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

    case "SHOW_CASH": {
      return {
        ...state,
        showCash: !state.showCash,
      };
    }

    case "CHOOSE_COIN": {
      return {
        ...state,
        coin: action.payload,
      };
    }

    case "BET_UP": {
      if (state.wager === 5) {
        return state;
      }
      return {
        ...state,
        wager: state.wager + 1,
      };
    }

    case "BET_DOWN": {
      if (state.wager === 1) {
        return state;
      }
      return {
        ...state,
        wager: state.wager - 1,
      };
    }

    case "ADD_CREDIT":
      return {
        ...state,
        credit: state.credit + action.credits,
      };

    default:
      return state;
  }
};

export default Reducer;
