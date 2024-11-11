import {
  BOARD_COLS_LG,
  BOARD_COLS_MD,
  BOARD_COLS_SM,
  BOARD_COLS_XL,
  BOARD_ROWS_MD,
  BOARD_ROWS_SM,
} from "../constants";
import { Size } from "../types";

export const getBoardSizeByResolution = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): Size => {
  if (width > 1024) {
    return {
      cols: BOARD_COLS_XL,
      rows: height > 768 ? BOARD_ROWS_MD : BOARD_ROWS_SM,
    };
  } else if (width > 768) {
    return {
      cols: BOARD_COLS_LG,
      rows: height > 768 ? BOARD_ROWS_MD : BOARD_ROWS_SM,
    };
  } else if (width > 480) {
    return {
      cols: BOARD_COLS_MD,
      rows: height > 768 ? BOARD_ROWS_MD : BOARD_ROWS_SM,
    };
  } else {
    return {
      cols: BOARD_COLS_SM,
      rows: height > 768 ? BOARD_ROWS_MD : BOARD_ROWS_SM,
    };
  }
};
