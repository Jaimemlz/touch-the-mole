import { LitElement } from "lit";

export class PanelCellViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The difficulty of the game.
       */
      difficulty: { type: String },
    };
  }

  constructor() {
    super();
    this.difficulty = "Easy";
  }
}
