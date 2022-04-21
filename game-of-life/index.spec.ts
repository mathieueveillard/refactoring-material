import { CellCoordinate, isCellLiveOnNextgeneration } from ".";

describe("Test isCellLiveOnNextgeneration", () => {
  it("should die because of under population", () => {
    const aliveCells: Set<string> = new Set(["0|0"]);
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(false);
  });

  it("should live because it doesn't match for under population", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2", "1|1"]);
    /**
     * 1 0 1
     * 0 x 0
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(true);
  });

  it("should live because the cell have at least 2 living cells neighbors", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2", "1|1"]);
    /**
     * 1 0 1
     * 0 x 0
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(true);
  });

  it("should live because the cell have at less than 4 living cells neighbors", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2", "1|2"]);
    /**
     * 1 0 1
     * 0 x 1
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(true);
  });

  it("should die because the cell has at more than 3 living cells neighbors", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2", "1|0", "1|2"]);
    /**
     * 1 0 1
     * 1 x 1
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(false);
  });

  it("should die because the cell is dead and has less than 3 living cells neighbors", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2"]);
    /**
     * 1 0 1
     * 0 x 0
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(false);
  });

  it("should live because the cell is dead and has exactly 3 living cells neighbors", () => {
    const aliveCells: Set<string> = new Set(["0|0", "0|2", "1|0"]);
    /**
     * 1 0 1
     * 1 x 0
     * 0 0 0
     */
    const cellCoordinate: CellCoordinate = {
      row: 1,
      column: 1,
    };

    expect(isCellLiveOnNextgeneration(aliveCells, cellCoordinate)).toBe(true);
  });
});
