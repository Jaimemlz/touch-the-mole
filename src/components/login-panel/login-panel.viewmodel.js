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
      this.handleLogin();
    }
  }

  handleLogin = () =>
    this.dispatchEvent(
      new CustomEvent("login-panel:login", { detail: this.user })
    );
}
