import { css } from "lit";

export const touchTheMoleStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-family: Poppins, sans-serif;
    font-size: 2.5em;
    background: radial-gradient(circle, rgb(231, 209, 155), rgb(174, 124, 86));
    width: 100%;
    gap: 20px;
    overflow: auto;
  }

  .game__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
  }

  .game__user {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ae7b56;
    border-radius: 8px;
    padding: 5px 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
  }

  .game__user img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0px 5px white;
  }

  .game__user p {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    color: white;
    margin: 0;
    text-shadow: 0 0px 1px white;
  }

  .game__logout {
    background-color: #ae7b56;
    border: 2px solid white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .game__logout:hover {
    background-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .game__logout img {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
  }

  p {
    margin: 0;
  }
`;
