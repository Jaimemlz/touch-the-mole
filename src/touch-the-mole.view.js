import { html } from "lit";
import { TouchTheMoleViewmodel } from "./touch-the-mole.viewmodel";
import { touchTheMoleStyles } from "./styles/touch-the-mole.styles.css";
import "./components/game-panel/game-panel.view";

export class TouchTheMoleView extends TouchTheMoleViewmodel {
  static styles = [touchTheMoleStyles];

  render() {
    return html` <p>TOCA AL TOPO</p>
      <game-panel play></game-panel>`;
  }
}

window.customElements.define("touch-the-mole", TouchTheMoleView);
