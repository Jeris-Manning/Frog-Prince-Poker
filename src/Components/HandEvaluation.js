const HandEvaluation = (hand) => {
  let ranks = [];
  let suits = [];
  var cardList = {
    11: "Jacks",
    12: "Queens",
    13: "Kings",
    14: "Aces",
  };
  hand.forEach((card) => {
    ranks.push(Number(card.rank));
    suits.push(card.suit);
  });

  ranks = ranks.sort((a, b) => a - b);

  if (new Set(suits).size === 1) {
    if (ranks[0] === 10) {
      return "a Royal Flush";
    }
    if (ranks[4] - ranks[0] === 4 || (ranks[3] === 4 && ranks[4] === 14)) {
      return "a Straight Flush";
    } else {
      return "a Flush";
    }
  } else {
    if (new Set(ranks).size === 2) {
      if (ranks[0] !== ranks[1]) {
        return ranks[1] > 10
          ? `Four of a Kind - ${cardList[ranks[1]]}`
          : `Four of a Kind - ${[ranks[1]]}s`;
      }
      if (ranks[3] !== ranks[4]) {
        return ranks[3] > 10
          ? `Four of a Kind - ${cardList[ranks[3]]}`
          : `Four of a Kind - ${[ranks[3]]}s`;
      } else {
        return "a Full House";
      }
    }
  }

  if (new Set(ranks).size === 5) {
    if (ranks[4] - ranks[0] === 4 || (ranks[3] === 4 && ranks[4] === 14)) {
      return "a Straight";
    }
  }

  if (new Set(ranks).size === 3) {
    return ranks[0] === ranks[2] || ranks[2] === ranks[4]
      ? ranks[2] > 10
        ? `Three of a Kind - ${cardList[ranks[2]]}`
        : `Three of a Kind - ${[ranks[2]]}s`
      : "Two Pair";
  }

  for (let i = 0; i < 4; i++) {
    if (ranks[i] === ranks[i + 1] && ranks[i] + ranks[i + 1] >= 22) {
      return `a Pair of ${cardList[ranks[i]]}`;
    }
  }

  return "a losing hand";
};

export default HandEvaluation;
