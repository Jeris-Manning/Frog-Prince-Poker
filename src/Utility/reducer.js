import { shuffledDeck } from "./deckUtilities";

export const init = {
  deck: [...shuffledDeck()],
  hand: [],
};

const reducer = function (state, action) {
  switch (action.type) {
    case "SHUFFLE_DECK":
      return {
        ...state,
        deck: [...shuffledDeck()],
      };
    case "DRAW_FIVE":
      for (let i = 0; i < 5; i++) {
        state.hand[i] = state.deck.pop();
      }
      return {
        ...state,
      };
  }
};

export default reducer;
