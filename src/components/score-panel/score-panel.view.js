import { html } from "lit";
import { ScorePanelViewmodel } from "./score-panel.viewmodel";
import { ScorePanelStyles } from "./styles/score-panel.styles.css";

export class ScorePanelView extends ScorePanelViewmodel {
  static styles = [ScorePanelStyles];

  render() {
    return html` <div class="score">${this._points}</div>`;
  }
}

window.customElements.define("score-panel", ScorePanelView);
