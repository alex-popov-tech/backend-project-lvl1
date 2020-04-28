import generateGameWith from '../engine/index.js';
import randomPositiveInteger from '../utils.js';

const description = 'What number is missing in the progression?';

export default () => generateGameWith({
  description,
  generateRoundData: () => {
    const DEFAULT_PROGRESSION_LENGTH = 10;
    const seed = randomPositiveInteger(DEFAULT_PROGRESSION_LENGTH - 1);
    const progression = new Array(DEFAULT_PROGRESSION_LENGTH)
      .fill(null)
      .map((_, i) => i + 1)
      .map((it) => it * seed);
    const missingElement = progression[seed];
    progression[seed] = '..';

    const question = progression.join(' ');
    const answer = String(missingElement);
    return [question, answer];
  },
});
