import { LitElement } from "lit";

export class ScorePanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The number of points to be added when the player successfully clicks on the correct target.
       */
      pointsPerClick: { type: Number },

      /**
       * A boolean to trigger resetting the score.
       * When true, the score will be reset to zero.
       */
      resetScore: { type: Boolean },

      /**
       * A boolean to trigger incrementing the score.
       * When true, the score will be incremented by a specified amount.
       */
      incrementScore: { type: Boolean },

      /**
       * A boolean to trigger decrementing the score.
       * When true, the score will be decremented by a specified amount.
       */
      decrementScore: { type: Boolean },

      /**
       * The total number of points accumulated by the player during the game.
       * Points increase when the player successfully clicks on the correct target.
       * This value reflects the player's current score.
       */
      _points: { type: Number, state: true },
    };
  }

  constructor() {
    super();
    this.resetScore = false;
    this.pointsPerClick = 1;
    this._points = 0;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("resetScore") && this.resetScore) {
      this._handleResetScore();
    }

    if (
      changedProperties.has("incrementScore") ||
      changedProperties.has("decrementScore")
    ) {
      const scoreElement = this.shadowRoot.querySelector(".score");

      if (this.incrementScore) {
        this._points += this.pointsPerClick;
        scoreElement.classList.add("increment");
        this.incrementScore = false;
      } else if (this.decrementScore) {
        this._points -= this.pointsPerClick;
        scoreElement.classList.add("decrement");
        this.decrementScore = false;
      }

      scoreElement.addEventListener("animationend", () => {
        scoreElement.classList.remove("increment", "decrement");
      });
    }
  }

  _handleResetScore() {
    this._points = 0;
    this.resetScore = false;
  }
}
