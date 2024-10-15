import { css } from "lit";

export const ScorePanelStyles = css`
  :host {
    display: flex;
    width: fit-content;
  }

  .score {
    font-family: "Russo One", sans-serif;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
    color: #ffffff;
    text-shadow: 2px 2px 15px rgb(174, 124, 86);
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
      color: #c2ffc7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .decrement {
    animation: popScoreDecrement 0.5s ease-in-out;
  }

  @keyframes popScoreDecrement {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
      color: red;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
