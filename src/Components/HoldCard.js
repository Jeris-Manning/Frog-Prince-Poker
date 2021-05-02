const HoldCard = (hand, idx) => {
  let startHand = [...hand];
  let heldCard = { ...startHand[idx] };
  let behold = heldCard.held;
  heldCard.held = !behold;
  startHand[idx] = {...heldCard};

  return startHand;
};

export default HoldCard;
