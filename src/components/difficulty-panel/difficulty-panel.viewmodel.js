import { LitElement } from "lit";

export class DifficultyPanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The currently selected difficulty level of the game.
       * The possible values are keys that map to specific difficulty levels: "EASY", "MEDIUM", "HARD", and "EXTREME".
       */
      difficulty: { type: String },
    };
  }

  static DIFFICULTY_LEVELS = Object.freeze({
    EASY: "Fácil",
    MEDIUM: "Media",
    HARD: "Difícil",
    EXTREME: "Experto",
  });

  constructor() {
    super();
    this.difficulty = "EASY";
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
