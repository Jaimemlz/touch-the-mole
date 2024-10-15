import { css } from "lit";

export const touchTheMoleStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    font-family: Poppins, sans-serif;
    font-size: 2.5em;
    background: radial-gradient(circle, rgb(231, 209, 155), rgb(174, 124, 86));
    width: 100%;
    height: 100%;
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
    font-size: 20px;
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

  .game__toggle-button {
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
  }

  .game__toggle-button img {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
  }

  .game__toggle-button--on {
    background-color: #2ecc71;
  }

  .game__toggle-button--pause {
    background-color: #e74c3c;
  }

  .game__toggle-button:hover {
    opacity: 0.9;
  }

  difficulty-panel {
    margin: 35px 0;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    .game__toggle-button {
      bottom: 50px;
    }

    :host {
      gap: 0;
    }
  }
`;
