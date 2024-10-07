const shared = 1;

type X = {
  [k: number]: string;
  [k: string]: number | string;
};

let x: X = {
  0: '1',
  x: 12,
};

export {};
