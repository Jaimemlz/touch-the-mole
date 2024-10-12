import { LitElement } from "lit";

export class TouchTheMoleViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The difficulty of the game.
       */
      difficulty: { type: String },

      /**
       * A boolean to trigger incrementing the score.
       * When true, the score will be incremented by a specified amount.
       */
      _hasIncrementScore: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.difficulty = "Easy";
    this._hasIncrementScore = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (
      changedProperties.has("_hasIncrementScore") &&
      this._hasIncrementScore
    ) {
      this._hasIncrementScore = false;
    }
  }
}
