import { html } from "lit";
import { TouchTheMoleViewmodel } from "./touch-the-mole.viewmodel";
import { touchTheMoleStyles } from "./styles/touch-the-mole.styles.css";
import "./components/game-panel/game-panel.view";
import "./components/score-panel/score-panel.view";

export class TouchTheMoleView extends TouchTheMoleViewmodel {
  static styles = [touchTheMoleStyles];

  render() {
    return html` <p>TOCA AL TOPO</p>
      <score-panel .incrementScore=${this._hasIncrementScore}></score-panel>
      <game-panel
        play
        @game-panel:clickedCellActived=${() => (this._hasIncrementScore = true)}
      ></game-panel>`;
  }
}

window.customElements.define("touch-the-mole", TouchTheMoleView);
