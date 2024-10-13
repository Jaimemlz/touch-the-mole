import { html } from "lit";
import { DifficultyPanelViewmodel } from "./difficulty-panel.viewmodel";
import { DifficultyPanelStyles } from "./styles/difficulty-panel.styles.css";

export class DifficultyPanelView extends DifficultyPanelViewmodel {
  static styles = [DifficultyPanelStyles];

  render() {
    return html`
      <div>
        ${DifficultyPanelViewmodel.DIFFICULTY_LEVELS.map((level, index) =>
          this._renderButton(level, index + 1)
        )}
      </div>
    `;
  }

  _renderButton = (level, difficultyValue) =>
    html`
      <div
        class="difficulty-option ${this.difficulty == difficultyValue
          ? "selected"
          : ""}"
        @click="${() => this.handleChangeDifficulty(difficultyValue)}"
      >
        ${level}
      </div>
    `;
}

window.customElements.define("difficulty-panel", DifficultyPanelView);
