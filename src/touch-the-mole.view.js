import { html } from "lit";
import { TouchTheMoleViewmodel } from "./touch-the-mole.viewmodel";
import { touchTheMoleStyles } from "./styles/touch-the-mole.styles.css";
import "./components/game-panel/game-panel.view";
import "./components/score-panel/score-panel.view";
import "./components/login-panel/login-panel.view";
import "./components/difficulty-panel/difficulty-panel.view";
import { when } from "lit/directives/when.js";

export class TouchTheMoleView extends TouchTheMoleViewmodel {
  static styles = [touchTheMoleStyles];

  render() {
    return html` ${when(this.user, this._renderPage, this._renderLoginPanel)}`;
  }

  _renderLoginPanel = () =>
    html` <login-panel @login-panel:login=${this.handleLogin}></login-panel> `;

  _renderPage = () => html`
    ${this._renderHeader()} ${this._renderScore()} ${this._renderGamePanel()}
    ${this._renderDifficultyPanel()}
  `;

  _renderHeader = () => html` <div class="game__header">
    <div class="game__user">
      <img src="./public/images/user.svg" />
      <p>${this.user}</p>
    </div>
    <button @click=${this.handleLogout} class="game__logout">
      <img src="./public/images/logout.svg" />
    </button>
  </div>`;

  _renderScore = () =>
    html` <score-panel
      .incrementScore=${this._hasIncrementScore}
    ></score-panel>`;

  _renderGamePanel = () => html` <game-panel
    play
    .difficulty=${this.difficulty}
    @game-panel:clickedCellActived=${this.handleIncrement}
  ></game-panel>`;

  _renderDifficultyPanel = () =>
    html` <difficulty-panel
      .difficulty=${this.difficulty}
      @difficulty-panel:changed=${this.handleDifficultyChanged}
    ></difficulty-panel>`;
}

window.customElements.define("touch-the-mole", TouchTheMoleView);
