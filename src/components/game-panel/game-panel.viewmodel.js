import { LitElement } from "lit";

export class GamePanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The nums of columns.
       */
      columns: { type: Number },

      /**
       * The nums of rows.
       */
      rows: { type: Number },

      /**
       * A boolean that indicates whether the mole is currently visible and clickable in the game.
       * When true, the mole can be interacted with. When false, the mole is hidden or inactive.
       */
      play: { type: Boolean, reflect: true },

      /**
       * The currently selected difficulty level of the game.
       * This number corresponds to the player's choice of difficulty, where different values represent specific difficulty tiers.
       * The possible values are integers that indicate the level, such as 1 for "Easy", 2 for "Medium", 3 for "Hard", and 4 for "Expert".
       */
      difficulty: { type: Number },

      /**
       * The cells that are currently active.
       * This could be a single number (for one active cell) or an array of numbers (for multiple active cells) [dificulty "Experto"].
       */
      _cellActive: { type: Array, state: true },
    };
  }

  static DIFFICULTY_TIMINGS = Object.freeze({
    1: 1000, // Fácil: 1000 ms
    2: 750, // Media: 750 ms
    3: 500, // Difícil: 500 ms
    4: 1000, // Experto: 1000 ms
  });

  constructor() {
    super();
    this.columns = 3;
    this.rows = 3;
    this._active = 0;
    this.play = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("columns") || changedProperties.has("rows")) {
      this.style.setProperty("--grid-columns", this.columns);
      this.style.setProperty("--grid-rows", this.rows);
    }

    if (changedProperties.has("play")) {
      this.play
        ? this._startRandomCellGeneration()
        : this._stopRandomCellGeneration();
    }

    if (changedProperties.has("difficulty")) {
      this.columns = this.difficulty === 4 ? 4 : 3;
      this.rows = this.difficulty === 4 ? 4 : 3;
    }
  }

  getAnimationTime = () =>
    GamePanelViewmodel.DIFFICULTY_TIMINGS[this.difficulty];

  _updateGridStyle() {
    this.style.setProperty("--grid-columns", this.columns);
    this.style.setProperty("--grid-rows", this.rows);
  }

  _startRandomCellGeneration() {
    this._interval = setInterval(() => {
      this._generateNumCellActived();
    }, this.getAnimationTime());
  }

  _stopRandomCellGeneration() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _generateNumCellActived() {
    let newNumber1, newNumber2;

    do {
      newNumber1 = this._generateNumRandom();
    } while (newNumber1 === this._cellActive);

    if (this.difficulty === 4) {
      do {
        newNumber2 = this._generateNumRandom();
      } while (newNumber2 === newNumber1 || newNumber2 === this._cellActive);

      this._cellActive = [newNumber1, newNumber2];
    } else {
      this._cellActive = newNumber1;
    }
  }

  _generateNumRandom() {
    return Math.floor(Math.random() * this.columns * this.rows) + 1;
  }

  _hasTwentyPercentChance = () => Math.random() < 0.2;

  handleClickEvent = () =>
    this.dispatchEvent(new CustomEvent("game-panel:clickedCorrectCell"));

  handleErrorClickEvent = () =>
    this.dispatchEvent(new CustomEvent("game-panel:clickedErrorCell"));
}
