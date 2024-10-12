import { html } from "lit";
import { PanelCellViewmodel } from "./panel-cell.viewmodel";
import { PanelCellStyles } from "./styles/panel-cell.styles.css";

export class PanelCellView extends PanelCellViewmodel {
  static styles = [PanelCellStyles];

  render() {
    return html``;
  }
}

window.customElements.define("panel-cell", PanelCellView);
