import { Color, Shape, ShapeI, ShapeJ, ShapeL, ShapeO, ShapeS, ShapeT, ShapeZ } from "../types";

export const getColorByShape = (shape: Shape): Color | null => {
  switch (shape) {
    case ShapeI:
    case ShapeO:
      return Color.green;
    case ShapeT:
    case ShapeS:
      return Color.blue;
    case ShapeZ:
    case ShapeJ:
    case ShapeL:
      return Color.red;
    default:
      return null;
  }
};

export const getRandomTetroidShape = (): Shape => {
  const possibleShapes = [ShapeI, ShapeO, ShapeT, ShapeS, ShapeZ, ShapeJ, ShapeL];

  const randomIndex = Math.round(Math.random() * possibleShapes.length);

  return possibleShapes[randomIndex];
};
