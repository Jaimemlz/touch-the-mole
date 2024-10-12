import { html } from "lit";
import { PanelCellViewmodel } from "./panel-cell.viewmodel";
import { PanelCellStyles } from "./styles/panel-cell.styles.css";

export class PanelCellView extends PanelCellViewmodel {
  static styles = [PanelCellStyles];

  render() {
    return html` ${this.animationTime ? html`<h1>X</h1>` : html``}`;
  }
}

window.customElements.define("panel-cell", PanelCellView);
