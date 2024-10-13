import { css } from "lit";

export const touchTheMoleStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 2.5em;
    background: radial-gradient(circle at center, #e7d19b, rgb(174, 124, 86));
    width: 100%;
    height: 100%;
    gap: 35px;
  }

  p {
    margin: 0;
  }
`;
