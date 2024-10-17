import { LitElement } from "lit";

export class LoginPanelViewmodel extends LitElement {
  static get properties() {
    return {
      /**
       * The name of user.
       */
      user: { type: String },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
  }

  handleInput(e) {
    this.user = e.target.value;
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.handleLogin(e);
    }
  }

  handleLogin(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector('#name');
    const errorMessage = this.renderRoot.querySelector('#error-message');

    if (!input.checkValidity()) {
      errorMessage.classList.add('active');
      input.classList.add('error');
    } else {
      errorMessage.classList.remove('active');
      input.classList.remove('error');

      this.dispatchEvent(
        new CustomEvent('login-panel:login', { detail: this.user })
      );
    }
  }
}
