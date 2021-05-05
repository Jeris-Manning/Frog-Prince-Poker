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

  let sortedRanks = [...ranks.sort((a, b) => a - b)];

  if (new Set(sortedRanks).size <= 1) {
    return "";
  }

  if (new Set(suits).size === 1) {
    if (sortedRanks[0] === 10) {
      return "a Royal Flush";
    }
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 4 && sortedRanks[4] === 14)
    ) {
      return "a Straight Flush";
    } else {
      return "a Flush";
    }
  } else {
    if (new Set(sortedRanks).size === 2) {
      if (sortedRanks[0] !== sortedRanks[1]) {
        return sortedRanks[1] > 10
          ? `Four of a Kind - ${cardList[sortedRanks[1]]}`
          : `Four of a Kind - ${[sortedRanks[1]]}s`;
      }
      if (sortedRanks[3] !== sortedRanks[4]) {
        return sortedRanks[3] > 10
          ? `Four of a Kind - ${cardList[sortedRanks[3]]}`
          : `Four of a Kind - ${[sortedRanks[3]]}s`;
      } else {
        return "a Full House";
      }
    }
  }

  if (new Set(sortedRanks).size === 5) {
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 4 && sortedRanks[4] === 14)
    ) {
      return "a Straight";
    }
  }

  if (new Set(sortedRanks).size === 3) {
    return sortedRanks[0] === sortedRanks[2] ||
      sortedRanks[2] === sortedRanks[4]
      ? "Three of a Kind"
      : "Two Pair";
  }

  for (let i = 0; i < 4; i++) {
    if (
      sortedRanks[i] === sortedRanks[i + 1] &&
      sortedRanks[i] + sortedRanks[i + 1] >= 22
    ) {
      return `a Pair of ${cardList[sortedRanks[i]]}`;
    }
  }

  return "a losing hand";
};

export default HandEvaluation;
