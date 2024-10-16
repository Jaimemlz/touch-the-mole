import { css } from "lit";

export const DifficultyPanelStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 600px;
    box-sizing: border-box;
    padding: 0 15px;
  }

  .difficulty-option {
    padding: 10px;
    margin: 5px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    transition: background-color 0.3s ease;
    text-align: center;
    width: 100%;
  }

  .difficulty-option.selected {
    border: 3px solid #ffffff;
    background: radial-gradient(circle at center, rgb(174, 124, 86), #e7d19b);
    color: white;
  }

  .difficulty-option:hover {
    background-color: #ddd;
  }
`;
