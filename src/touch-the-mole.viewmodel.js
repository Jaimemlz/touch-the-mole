import { LitElement } from "lit";

export class TouchTheMoleViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The name of user.
       */
      user: { type: String },

      /**
       * The currently selected difficulty level of the game.
       * This number corresponds to the player's choice of difficulty, where different values represent specific difficulty tiers.
       * The possible values are integers that indicate the level, such as 1 for "Easy", 2 for "Medium", 3 for "Hard", and 4 for "Expert".
       */
      difficulty: { type: Number },

      /**
       * A boolean to trigger incrementing the score.
       * When true, the score will be incremented by a specified amount.
       */
      _hasIncrementScore: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.difficulty = 1;
    this._hasIncrementScore = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("difficulty")) {
      this._changeDifficulty();
    }

    if (
      changedProperties.has("_hasIncrementScore") &&
      this._hasIncrementScore
    ) {
      this._hasIncrementScore = false;
    }
  }

  _changeDifficulty() {}

  handleLogin(e) {
    this.user = e.detail;
  }

  handleIncrement() {
    this._hasIncrementScore = true;
  }

  handleDifficultyChanged(e) {
    this.difficulty = e.detail;
  }
}
