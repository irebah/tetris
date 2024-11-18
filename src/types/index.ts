export type Size = {
  rows: number;
  cols: number;
};

export type Position = {
  x: number;
  y: number;
};

export type BoardContent = (Color | "")[][];

// 1 represents color and the order is up down, next column, up down...
export type Shape = Array<Array<string>>;

export const ShapeI: Shape = [["1", "1", "1", "1"]];
export const ShapeO: Shape = [
  ["1", "1"],
  ["1", "1"],
];
export const ShapeT: Shape = [
  ["0", "1", "0"],
  ["1", "1", "1"],
];
export const ShapeS: Shape = [
  ["0", "1", "1"],
  ["1", "1", "0"],
];
export const ShapeZ: Shape = [
  ["1", "1", "0"],
  ["0", "1", "1"],
];
export const ShapeJ: Shape = [
  ["1", "0", "0"],
  ["1", "1", "1"],
];
export const ShapeL: Shape = [
  ["0", "0", "1"],
  ["1", "1", "1"],
];

export enum Color {
  red = "bg-red-400 border-red-700",
  blue = "bg-blue-400 border-blue-700",
  green = "bg-green-400 border-green-700",
}

export type TetrisPiece = {
  shape: Shape;
  position?: Position;
};
