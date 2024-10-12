import { css, html } from 'lit'
import { TouchTheMoleViewmodel } from "./touch-the-mole.viewmodel"
import { touchTheMoleStyles } from './styles/touch-the-mole.styles.css';

export class TouchTheMoleView extends TouchTheMoleViewmodel {
  static styles = [touchTheMoleStyles];

  render() {
    return html`
      <p>TOCA AL TOPO</p>
    `
  }
}

window.customElements.define('touch-the-mole', TouchTheMoleView)
