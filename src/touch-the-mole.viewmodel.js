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
    1: 10, // Fácil: 10 puntos
    2: 20, // Media: 20 puntos
    3: 30, // Difícil: 30 puntos
    4: 40, // Experto: 40 puntos
  });

  constructor() {
    super();
    this.difficulty = 1;
    this._hasIncrementScore = false;
    this._hasDecrementScore = false;
    this.play = false;
    this.user = "Jaime";
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

    if (
      changedProperties.has("_hasDecrementScore") &&
      this._hasDecrementScore
    ) {
      this._hasDecrementScore = false;
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
    this._changeDifficulty();
  }

  handleLogout() {
    this.user = "";
  }

  handleToggleGame() {
    this.play = !this.play;
  }
}
