export default ({
  roundsCount = 3,
  showRules,
  playRound,
  showCongratulations,
}) => {
  showRules();
  for (let i = 0; i < roundsCount; i += 1) {
    const isWin = playRound();
    if (!isWin) {
      return;
    }
  }
  showCongratulations();
};
