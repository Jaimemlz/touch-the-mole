import { html } from "lit";
import { LoginPanelViewmodel } from "./login-panel.viewmodel";
import { LoginPanelStyles } from "./styles/login-panel.styles.css";

export class LoginPanelView extends LoginPanelViewmodel {
  static styles = [LoginPanelStyles];

  render() {
    return html`
      <label class="login-label" for="name">Escribe tu usuario</label>
      <input
        type="text"
        id="name"
        class="login-input"
        placeholder="Tu usuario aqui"
        @input=${this.handleInput}
        @keydown=${this.handleKeyDown}
        required
      />
      <span id="error-message" class="error-message">
        Por favor, introduce tu usuario.
      </span>
      <button class="login-button" @click=${this.handleLogin}>Jugar</button>
    `;
  }
}

window.customElements.define("login-panel", LoginPanelView);
