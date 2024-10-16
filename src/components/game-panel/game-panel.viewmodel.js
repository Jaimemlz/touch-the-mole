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
       * The possible values are keys that map to specific difficulty levels: "EASY", "MEDIUM", "HARD", and "EXTREME".
       */
      difficulty: { type: String },

      /**
       * The cells that are currently active.
       * This could be a single number (for one active cell) or an array of numbers (for multiple active cells) [dificulty "Experto"].
       */
      _cellActive: { type: Array, state: true },
    };
  }

  static DIFFICULTY_TIMINGS = Object.freeze({
    EASY: 1000,
    MEDIUM: 750,
    HARD: 500,
    EXTREME: 1000,
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
      this._updateGridStyle();
    }

    if (changedProperties.has("play")) {
      this._handlePlayState();
    }

    if (changedProperties.has("difficulty")) {
      this._adjustDifficulty();
    }
  }

  _handlePlayState() {
    this.play
      ? this._startRandomCellGeneration()
      : this._stopRandomCellGeneration();
  }

  _adjustDifficulty() {
    const gridSize = this.difficulty === "EXTREME" ? 4 : 3;
    this.columns = gridSize;
    this.rows = gridSize;
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

    if (this.difficulty === "EXTREME") {
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
