import { LitElement } from "lit";

export class PanelCellViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The duration (in milliseconds) for which the mole is visible and clickable in the game.
       */
      animationTime: { type: Number },
    };
  }

  constructor() {
    super();
  }
}
