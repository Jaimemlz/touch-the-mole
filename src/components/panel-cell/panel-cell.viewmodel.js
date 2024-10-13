import { LitElement } from "lit";

export class PanelCellViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The duration (in milliseconds) for which the mole is visible and clickable in the game.
       */
      animationTime: { type: Number },

      /**
       * The state of the cell is clicked.
       */
      _clicked: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this._clicked = false;
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has("animationTime")) {
      this.style.setProperty(
        "--mole-animation-duration",
        `${this.animationTime}ms`
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleClick);
  }

  _handleClick = () => {
    this._clicked = true;
    return this.dispatchEvent(new CustomEvent("panel-cell:clicked"));
  };
}
