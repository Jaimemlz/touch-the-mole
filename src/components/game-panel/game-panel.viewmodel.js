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
       * The duration (in milliseconds) for which the mole is visible and clickable in the game.
       */
      animationTime: { type: Number },

      /**
       * A boolean that indicates whether the mole is currently visible and clickable in the game.
       * When true, the mole can be interacted with. When false, the mole is hidden or inactive.
       */
      play: { type: Boolean, reflect: true },

      /**
       * The cell has actived.
       */
      _cellActive: { type: Number, state: true },
    };
  }

  constructor() {
    super();
    this.columns = 3;
    this.rows = 3;
    this._active = 0;
    this.animationTime = 1500;
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
  }

  _updateGridStyle() {
    this.style.setProperty("--grid-columns", this.columns);
    this.style.setProperty("--grid-rows", this.rows);
  }

  _startRandomCellGeneration() {
    this._stopRandomCellGeneration();
    this._interval = setInterval(() => {
      this._generateNumCellActived();
    }, this.animationTime);
  }

  _stopRandomCellGeneration() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _generateNumCellActived() {
    let newNumber;
    do {
      newNumber = this._generateNumRandom();
    } while (newNumber === this._cellActive);
    this._cellActive = newNumber;
  }

  _generateNumRandom() {
    return Math.floor(Math.random() * this.columns * this.rows) + 1;
  }

  handleClickEvent() {
    const event = new CustomEvent("game-panel:clickedCellActived");
    this.dispatchEvent(event);
  }
}
