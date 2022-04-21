export type CellAlive = `${number}|${number}`;

export type Grid = Set<CellAlive>;

export type CellCoordinate = Readonly<{
  row: number;
  column: number;
}>;

export type Cell = 0 | 1;

const concatCellCoordinate = (cell: CellCoordinate) => {
  return `${cell.row}|${cell.column}`;
};

const isLivingCell =
  (aliveCells: Set<string>) => (cellMaybeAlive: CellCoordinate) => {
    return aliveCells.has(concatCellCoordinate(cellMaybeAlive));
  };

const findCellNeighbors = (cell: CellCoordinate): CellCoordinate[] => {
  const neighborTopLeft: CellCoordinate = {
    row: cell.row - 1,
    column: cell.column - 1,
  };
  const neighborTop: CellCoordinate = {
    row: cell.row - 1,
    column: cell.column,
  };
  const neighborTopRight: CellCoordinate = {
    row: cell.row - 1,
    column: cell.column + 1,
  };
  const neighborLeft: CellCoordinate = {
    row: cell.row,
    column: cell.column - 1,
  };
  const neighborRight: CellCoordinate = {
    row: cell.row,
    column: cell.column + 1,
  };
  const neighborBottomLeft: CellCoordinate = {
    row: cell.row + 1,
    column: cell.column - 1,
  };
  const neighborBottom: CellCoordinate = {
    row: cell.row + 1,
    column: cell.column,
  };
  const neighborBottomRight = {
    row: cell.row + 1,
    column: cell.column + 1,
  };

  return [
    neighborTopLeft,
    neighborTop,
    neighborTopRight,
    neighborLeft,
    neighborRight,
    neighborBottomLeft,
    neighborBottom,
    neighborBottomRight,
  ];
};

export const isCellLiveOnNextgeneration = (
  aliveCells: Set<string>,
  cellCoordinate: CellCoordinate
): boolean => {
  const cellNeighbors = findCellNeighbors(cellCoordinate);

  const livingNeighbors = cellNeighbors.filter(isLivingCell(aliveCells));

  const isCellMatchUnderPopulation = livingNeighbors.length >= 2;
  const isCellMatchOverPopulation = livingNeighbors.length <= 3;

  const isCellLive = isLivingCell(aliveCells)(cellCoordinate);

  const isCellMatchReproduction =
    isCellLive || (!isCellLive && livingNeighbors.length === 3);

  return (
    isCellMatchUnderPopulation &&
    isCellMatchOverPopulation &&
    isCellMatchReproduction
  );
};
