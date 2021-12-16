import { Party, Player } from "./tennis";

import { additionFractions } from "./index";

describe("Test function", () => {
  test("Player Get Point", function () {
    const player_one: Player = new Player();

    expect(player_one.getPoint()).toEqual("Love");
  });
});

describe("Test function", () => {
  test("Player add Point", function () {
    const player_one: Player = new Player();

    player_one.addPoint();

    expect(player_one.getPoint()).toEqual("15");
  });
});

describe("Test function", () => {
  test("Player remove Point", function () {
    const player_one: Player = new Player();

    const player_two: Player = new Player();

    const party: Party = new Party(player_one, player_two);

    player_one.addPoint();

    player_one.addPoint();

    player_one.addPoint();

    player_two.addPoint();

    player_two.addPoint();

    player_two.addPoint();

    expect(party.compareScores()).toEqual(true);
  });
});

describe("Test function", () => {
  test("Test DEUCE", function () {
    const player_one: Player = new Player();

    const player_two: Player = new Player();

    const party: Party = new Party(player_one, player_two);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_two);

    party.addPoint(player_two);

    party.addPoint(player_two); // MODE DEUCE

    expect(party.getDeuce()).toEqual(true);
  });
});

describe("Test function", () => {
  test("Test advantage", function () {
    const player_one: Player = new Player();

    const player_two: Player = new Player();

    const party: Party = new Party(player_one, player_two);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_two);

    party.addPoint(player_two);

    party.addPoint(player_two); // MODE DEUCE

    party.addPoint(player_two); // MODE ADVANTAGE

    expect(party.player_two.advantage).toEqual(true);
  });
});

describe("Test function", () => {
  test("Test advantage => winner", function () {
    const player_one: Player = new Player("Toto");

    const player_two: Player = new Player("Rémi");

    const party: Party = new Party(player_one, player_two);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_one);

    party.addPoint(player_two);

    party.addPoint(player_two);

    party.addPoint(player_two); // MODE DEUCE

    party.addPoint(player_two); // MODE ADVANTAGE

    party.addPoint(player_two); // WINNER

    expect(party.player_two.winner).toEqual(true);
  });
});
