import { css } from "lit";

export const PanelCellStyles = css`
  :host {
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/hole.webp");
    background-size: cover;
    background-position: center;
    --mole-animation-duration: 2s;
  }

  .cell__mole {
    width: 70%;
    height: 70%;
    cursor: pointer;
  }

  .cell__mole--normal {
    background: url("images/mole.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation var(--mole-animation-duration) infinite;
  }

  .cell__mole--hurt {
    background: url("images/mole-hurt.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation var(--mole-animation-duration) infinite;
  }

  @keyframes moleAnimation {
    0% {
      transform: translateY(0%);
      opacity: 0;
    }

    20% {
      transform: translateY(-13%);
      opacity: 100%;
    }

    70% {
      transform: translateY(-13%);
      opacity: 100%;
    }

    100% {
      transform: translateY(20%);
      opacity: 0;
    }
  }
`;
