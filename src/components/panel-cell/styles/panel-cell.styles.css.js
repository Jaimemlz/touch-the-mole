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
  }

  .cell__mole {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  .cell__mole--normal {
    background: url("images/mole.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation 2s infinite;
  }

  .cell__mole--hurt {
    background: url("images/mole-hurt.png") no-repeat center;
    background-size: contain;
    animation: moleAnimation 2s infinite;
  }

  @keyframes moleAnimation {
    0% {
      transform: translateY(-13%);
      opacity: 0;
    }

    40% {
      transform: translateY(-13%);
      opacity: 100%;
    }

    100% {
      transform: translateY(20%);
      opacity: 0;
    }
  }
`;
