const allKept = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
};
const emptyHand = {
  0: { idx: "back" },
  1: { idx: "back" },
  2: { idx: "back" },
  3: { idx: "back" },
  4: { idx: "back" },
};

export const init = {
  keep: {
    ...allKept,
  },
  hand: {
    ...emptyHand,
  },
};

const reducer = function (state, action) {
  switch (action.type) {
    case "UPDATE_HAND":
      return {
        ...state,
        hand: action.newHand,
      };
    case "TOGGLE_KEEP":
      return {
        ...state,
        keep: { ...state.keep, [action.i]: !state.keep[action.i] },
      };
  }
};

export default reducer;
