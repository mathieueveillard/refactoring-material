const SCORES = ["Love", "15", "30", "40", "Winner"];

export class Party {
  public player_one: Player;

  public player_two: Player;

  public deuce: boolean = false;

  constructor(player_one: Player, player_two: Player) {
    this.player_one = player_one;

    this.player_two = player_two;
  }

  // Verification DEUCE

  public compareScores() {
    return (
      this.player_two.getPoint() == "40" && this.player_one.getPoint() == "40"
    );
  }

  public addPoint(player: Player) {
    this.deuce ? player.setAdvantage() : player.addPoint();

    player.winner ? this.printWinner(player) : "";

    this.deuce = this.compareScores();
  }

  public getDeuce() {
    return this.deuce;
  }

  public printWinner(player: Player) {
    console.log("The winner is " + player.name);
  }
}

export class Player {
  private step;

  public advantage: boolean;

  public winner: boolean = false;

  public name: string;

  constructor(name: string = "Toto") {
    this.name = name;

    this.step = 0;
  }

  public getPoint() {
    return SCORES[this.step];
  }

  addPoint() {
    this.step++;
  }

  removePoint() {
    this.step--;
  }

  setAdvantage() {
    this.advantage ? (this.winner = true) : (this.advantage = true);
  }
}
