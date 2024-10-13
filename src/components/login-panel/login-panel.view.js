import { html } from "lit";
import { LoginPanelViewmodel } from "./login-panel.viewmodel";
import { LoginPanelStyles } from "./styles/login-panel.styles.css";

export class LoginPanelView extends LoginPanelViewmodel {
  static styles = [LoginPanelStyles];

  render() {
    return html` <label class="label" for="name">Escribe tu usario</label>
      <input
        type="text"
        id="name"
        class="styled-input"
        placeholder="Tu usuario aqui"
        @input=${this.handleInput}
      />
      <button class="styled-button" @click=${this.handleLogin}>Jugar</button>`;
  }
}

window.customElements.define("login-panel", LoginPanelView);
