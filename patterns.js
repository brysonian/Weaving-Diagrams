const patterns = {
  plain: {
    name: "Plain",
    pattern: [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ],
  },

  rib: {
    name: "Rib",
    pattern: [
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ],
  },
  oneThreeBrokenTwill: {
    name: "1/3 Broken Twill",
    pattern: [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ],
  },
  oneThreeTwill: {
    name: "1/3 Twill",
    pattern: [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  },
  oneThreeTwillWave: {
    name: "1/3 Twill Wave",
    pattern: [
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  },
  twoTwoTwill: {
    name: "2/2 Twill",
    pattern: [
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
    ],
  },
  twoTwoTwillWave: {
    name: "2/2 Twill Wave",
    pattern: [
      [0, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 1],

      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
    ],
  },

  pebble: {
    name: "Pebble",
    pattern: [
      [0, 0, 1, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ],
  },
};