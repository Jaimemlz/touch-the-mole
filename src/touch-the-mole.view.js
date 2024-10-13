import { html } from "lit";
import { TouchTheMoleViewmodel } from "./touch-the-mole.viewmodel";
import { touchTheMoleStyles } from "./styles/touch-the-mole.styles.css";
import "./components/game-panel/game-panel.view";
import "./components/score-panel/score-panel.view";
import "./components/difficulty-panel/difficulty-panel.view";

export class TouchTheMoleView extends TouchTheMoleViewmodel {
  static styles = [touchTheMoleStyles];

  render() {
    return html` <game-panel
        play
        .difficulty=${this.difficulty}
        @game-panel:clickedCellActived=${this.handleIncrement}
      ></game-panel
      ><score-panel .incrementScore=${this._hasIncrementScore}></score-panel>
      <difficulty-panel
        .difficulty=${this.difficulty}
        @difficulty-panel:changed=${this.handleDifficultyChanged}
      ></difficulty-panel>`;
  }
}

window.customElements.define("touch-the-mole", TouchTheMoleView);
