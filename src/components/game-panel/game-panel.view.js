import { html } from "lit";
import { GamePanelViewmodel } from "./game-panel.viewmodel";
import { GamePanelStyles } from "./styles/game-panel.styles.css";

export class GamePanelView extends GamePanelViewmodel {
  static styles = [GamePanelStyles];

  render() {
    return html` <div></div>`;
  }
}

window.customElements.define("game-panel", GamePanelView);
