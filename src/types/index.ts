export type Size = {
  rows: number;
  cols: number;
};

export type BoardContent = (Shape | "")[][];

// 1 represents color and the order is up down, next column, up down...
export enum Shape {
  I = "01010101",
  O = "1111",
  T = "011101",
  S = "011110",
  Z = "101101",
  J = "110101",
  L = "010111",
}

export enum Color {
  red = "bg-red-400 border-red-700",
  blue = "bg-blue-400 border-blue-700",
  green = "bg-green-400 border-green-700",
}

export type TetrisPiece = {
  shape: Shape;
};
