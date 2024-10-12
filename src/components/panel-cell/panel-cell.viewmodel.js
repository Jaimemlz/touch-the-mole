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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleClick);
  }

  _handleClick = () =>
    this.dispatchEvent(new CustomEvent("panel-cell:clicked"));
}
