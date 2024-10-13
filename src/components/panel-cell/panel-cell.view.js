import { html } from "lit";
import { PanelCellViewmodel } from "./panel-cell.viewmodel";
import { PanelCellStyles } from "./styles/panel-cell.styles.css";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";

export class PanelCellView extends PanelCellViewmodel {
  static styles = [PanelCellStyles];

  render() {
    return html` ${when(this.animationTime, this._renderMole)}`;
  }

  _renderMole = () => {
    const classes = {
      "cell__mole--normal": !this._clicked,
      "cell__mole--hurt": this._clicked,
    };

    return html`<div class="cell__mole ${classMap(classes)}"></div>`;
  };
}

window.customElements.define("panel-cell", PanelCellView);
