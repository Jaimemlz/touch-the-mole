import { css } from "lit";

export const ScorePanelStyles = css`
  :host {
  }

  .score {
    font-family: "Russo One", sans-serif;
    font-size: 100px;
    font-weight: bold;
    transition: transform 0.3s ease, opacity 0.3s ease;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.1px white;
  }

  .increment {
    animation: popScore 0.5s ease-in-out;
  }

  @keyframes popScore {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
