import { Color, Shape } from "../types";

export const getColorByShape = (shape: Shape): Color => {
  switch (shape) {
    case Shape.I:
    case Shape.O:
      return Color.green;
    case Shape.T:
    case Shape.S:
      return Color.blue;
    case Shape.Z:
    case Shape.J:
    case Shape.L:
      return Color.red;
  }
};
