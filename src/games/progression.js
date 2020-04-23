import createGameWith from './main.js';

const description = 'What number is missing in the progression?';

export default () => createGameWith({
  description,
  roundData: () => {
    const DEFAULT_PROGRESSION_LENGTH = 10;
    const seed = Math.round(Math.random() * (DEFAULT_PROGRESSION_LENGTH - 1));
    const progression = new Array(DEFAULT_PROGRESSION_LENGTH)
      .fill(null)
      .map((_, i) => i + 1)
      .map((it) => it * seed);
    const missingElement = progression[seed];
    progression[seed] = '..';
    return [progression.join(' '), String(missingElement)];
  },
});
