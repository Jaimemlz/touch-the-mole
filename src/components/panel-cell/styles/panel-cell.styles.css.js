import { css } from "lit";

export const PanelCellStyles = css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/hole.webp");
    background-size: cover;
    background-position: center;
    --mole-animation-duration: 2s;
    aspect-ratio: 1 / 1;
  }

  .cell__mole {
    width: 70%;
    height: 70%;
    cursor: url('images/hammer.png'), auto;
    opacity: 0;
  }

  .cell__mole--normal {
    background: url("images/mole.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation var(--mole-animation-duration) ease-in-out 1;
  }

  .cell__mole--hurt {
    background: url("images/mole-hurt.png") no-repeat center;
    background-size: contain;
    animation: none;
    transform: translateY(-7%);
    opacity: 100%;
  }

  .cell__mole-error--normal {
    width: 55%;
    height: 55%;
    background: url("images/mole_evil.png") no-repeat center;
    background-size: contain;
    animation: moleAnimationError var(--mole-animation-duration) ease-in-out 1;
  }

  .cell__mole-error--hurt {
    background: url("images/mole_evil.png") no-repeat center;
    background-size: contain;
    animation: vibrate 0.2s ease-in-out 3;
    transform: translateY(-7%);
    opacity: 100%;
    width: 60%;
    height: 60%;
  }

  @keyframes moleAnimation {
    0% {
      transform: translateY(0%);
      opacity: 100%;
    }

    20% {
      transform: translateY(-15%);
    }

    70% {
      transform: translateY(-15%);
      opacity: 100%;
    }

    90% {
      opacity: 0;
    }

    100% {
      transform: translateY(20%);
    }
  }

  @keyframes moleAnimationError {
    0% {
      transform: translateY(0%);
      opacity: 100%;
    }

    20% {
      transform: translateY(-7%);
    }

    70% {
      transform: translateY(-7%);
      opacity: 100%;
    }

    90% {
      opacity: 0;
    }

    100% {
      transform: translateY(20%);
    }
  }

  @keyframes vibrate {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(2px, -2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }
`;
