import { LitElement } from "lit";
import { Router } from "@vaadin/router";

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
       * A boolean that indicates whether the mole is currently visible and clickable in the game.
       * When true, the mole can be interacted with. When false, the mole is hidden or inactive.
       */
      play: { type: Boolean, reflect: true },

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
    this.play = false;
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

    if (this.user && window.location.pathname !== "/touch-the-mole/game") {
      Router.go("/touch-the-mole/game");
    } else if (
      !this.user &&
      window.location.pathname !== "/touch-the-mole/home"
    ) {
      Router.go("/touch-the-mole/home");
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

  handleLogout() {
    this.user = "";
  }

  handleToggleGame() {
    this.play = !this.play;
  }
}
