import { css } from "lit";

export const GamePanelStyles = css`
  :host {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    border: 4px solid black;
    border-radius: 15px;
    overflow: hidden;
  }
`;
