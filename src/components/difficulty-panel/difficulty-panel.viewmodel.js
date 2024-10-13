import { LitElement } from "lit";

export class DifficultyPanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The currently selected difficulty level of the game.
       * This number corresponds to the player's choice of difficulty, where different values represent specific difficulty tiers.
       * The possible values are integers that indicate the level, such as 1 for "Easy", 2 for "Medium", 3 for "Hard", and 4 for "Expert".
       */
      difficulty: { type: Number },
    };
  }

  static DIFFICULTY_LEVELS = Object.freeze([
    "Fácil",
    "Media",
    "Difícil",
    "Experto",
  ]);

  constructor() {
    super();
    this.difficulty = 1;
  }

  handleChangeDifficulty(level) {
    this.difficulty = level;
    return this.dispatchEvent(
      new CustomEvent("difficulty-panel:changed", {
        detail: this.difficulty,
      })
    );
  }
}
