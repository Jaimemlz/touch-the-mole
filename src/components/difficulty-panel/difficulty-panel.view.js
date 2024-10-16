import { html } from "lit";
import { DifficultyPanelViewmodel } from "./difficulty-panel.viewmodel";
import { DifficultyPanelStyles } from "./styles/difficulty-panel.styles.css";

export class DifficultyPanelView extends DifficultyPanelViewmodel {
  static styles = [DifficultyPanelStyles];

  render() {
    return html`
      ${Object.entries(DifficultyPanelViewmodel.DIFFICULTY_LEVELS).map(
        ([key, level]) => this._renderButton(level, key)
      )}
    `;
  }

  _renderButton = (level, difficultyKey) =>
    html`
      <div
        class="difficulty-option ${this.difficulty === difficultyKey
          ? "selected"
          : ""}"
        @click="${() => this.handleChangeDifficulty(difficultyKey)}"
      >
        ${level}
      </div>
    `;
}

window.customElements.define("difficulty-panel", DifficultyPanelView);
