import { html } from "lit";
import { GamePanelViewmodel } from "./game-panel.viewmodel";
import { GamePanelStyles } from "./styles/game-panel.styles.css";
import { when } from "lit/directives/when.js";
import "./../panel-cell/panel-cell.view";

export class GamePanelView extends GamePanelViewmodel {
  static styles = [GamePanelStyles];

  render() {
    return html`${Array.from({ length: this.columns * this.rows }).map(
      (_, index) => this._renderCell(index + 1)
    )}`;
  }

  _renderCell(index) {
    return html`
      ${when(
        index == this._cellActive && this.play,
        this._renderActiveCell,
        this._renderNormalCell
      )}
    `;
  }

  _renderActiveCell = () => {
    return html`<panel-cell
      .animationTime=${this.getAnimationTime()}
      @panel-cell:clicked=${this.handleClickEvent}
    ></panel-cell>`;
  };

  _renderNormalCell = () => {
    return html`<panel-cell></panel-cell>`;
  };
}

window.customElements.define("game-panel", GamePanelView);
