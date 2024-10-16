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
       * The possible values are keys that map to specific difficulty levels: "EASY", "MEDIUM", "HARD", and "EXTREME".
       */
      difficulty: { type: String },

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

      /**
       * A boolean to trigger decrement the score.
       * When true, the score will be decremented by a specified amount.
       */
      _hasDecrementScore: { type: Boolean, state: true },

      /**
       * The number of points awarded per click.
       * This state variable tracks how many points the player earns each time they successfully click a target.
       */
      _pointsPerClick: { type: Number, state: true },
    };
  }

  static DIFFICULTY_POINTS = Object.freeze({
    EASY: 10,
    MEDIUM: 20,
    HARD: 30,
    EXTREME: 40,
  });

  constructor() {
    super();
    this.difficulty = "EASY";
    this._hasIncrementScore = false;
    this._hasDecrementScore = false;
    this.play = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("difficulty")) {
      this._changeDifficulty();
    }

    ["_hasIncrementScore", "_hasDecrementScore"].forEach((prop) => {
      if (changedProperties.has(prop)) {
        this[prop] = false;
      }
    });
    this._handleUserRouting();
  }

  _handleUserRouting() {
    const currentPath = window.location.pathname;
    if (this.user && currentPath !== "/touch-the-mole/game") {
      Router.go("/touch-the-mole/game");
    } else if (!this.user && currentPath !== "/touch-the-mole/home") {
      Router.go("/touch-the-mole/home");
    }
  }

  _changeDifficulty = () =>
    (this._pointsPerClick =
      TouchTheMoleViewmodel.DIFFICULTY_POINTS[this.difficulty]);

  handleLogin(e) {
    this.user = e.detail;
  }

  handleIncrement() {
    this._hasIncrementScore = true;
  }

  handleDecrement() {
    this._hasDecrementScore = true;
  }

  handleDifficultyChanged(e) {
    this.difficulty = e.detail;
    this.play = false;
    this._changeDifficulty();
  }

  handleLogout() {
    this.user = "";
  }

  handleToggleGame() {
    this.play = !this.play;
  }
}
