export const chessesDefault = [
  {
    name: 'N1',
    siblings: ['N2', 'N3', 'N4'],
    side: 0,
  },
  {
    name: 'N2',
    siblings: ['N1', 'N3', 'W1'],
    side: 0,
  },
  {
    name: 'N3',
    siblings: ['N2', 'N1', 'N4', 'C1'],
    side: 0,
  },
  {
    name: 'N4',
    siblings: ['N1', 'N3', 'E1'],
    side: 0,
  },
  {
    name: 'W1',
    siblings: ['W2', 'W4', 'N2'],
    side: 0,
  },
  {
    name: 'W2',
    siblings: ['W1', 'W3', 'W4'],
    side: null,
  },
  {
    name: 'W3',
    siblings: ['W2', 'S2', 'W4'],
    side: 1,
  },
  {
    name: 'W4',
    siblings: ['W1', 'W2', 'W3', 'C2'],
    side: null,
  },
  {
    name: 'S1',
    siblings: ['S2', 'S3', 'S4', 'C3'],
    side: 1,
  },
  {
    name: 'S2',
    siblings: ['W3', 'S3', 'S1'],
    side: 1,
  },
  {
    name: 'S3',
    siblings: ['S1', 'S2', 'S4'],
    side: 1,
  },
  {
    name: 'S4',
    siblings: ['S1', 'S3', 'E3'],
    side: 1,
  },
  {
    name: 'E1',
    siblings: ['N4', 'E2', 'E4'],
    side: 0,
  },
  {
    name: 'E2',
    siblings: ['C4', 'E3', 'E4', 'E1'],
    side: null,
  },
  {
    name: 'E3',
    siblings: ['E2', 'S4', 'E4'],
    side: 1,
  },
  {
    name: 'E4',
    siblings: ['E1', 'E2', 'E3'],
    side: null,
  },
  {
    name: 'C1',
    siblings: ['N3', 'C2', 'C5', 'C4'],
    side: null,
  },
  {
    name: 'C2',
    siblings: ['C1', 'W4', 'C3', 'C5'],
    side: null,
  },
  {
    name: 'C3',
    siblings: ['C5', 'C2', 'S1', 'C4'],
    side: null,
  },
  {
    name: 'C4',
    siblings: ['C1', 'C5', 'C3', 'E2'],
    side: null,
  },
  {
    name: 'C5',
    siblings: ['C1', 'C2', 'C3', 'C4'],
    side: null,
  },
]