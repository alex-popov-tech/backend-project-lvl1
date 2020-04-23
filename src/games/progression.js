import createGameWith from './main.js';

export default () => createGameWith({
  description: 'What number is missing in the progression?',
  roundData: () => {
    const DEFAULT_PROGRESSION_LENGTH = 10;
    const seed = Math.round(Math.random() * (DEFAULT_PROGRESSION_LENGTH - 1));
    const progression = new Array(DEFAULT_PROGRESSION_LENGTH)
      .fill(null)
      .map((_, i) => i + 1)
      .map((it) => it * seed);
    const missingElement = progression[seed];
    progression[seed] = '..';
    return [(`Question: ${progression.join(' ')} `), String(missingElement)];
  },
});
