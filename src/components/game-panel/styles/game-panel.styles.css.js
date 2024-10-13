import { css } from "lit";

export const GamePanelStyles = css`
  :host {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(174, 123, 86), 0 10px 20px rgba(174, 123, 86);
  }
`;
