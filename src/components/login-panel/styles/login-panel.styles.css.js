import { css } from "lit";

export const LoginPanelStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
  }

  .login-input {
    width: 300px;
    padding: 10px 20px;
    font-size: 18px;
    border: 2px solid #ae7b56;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login-input:focus {
    border-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .login-input::placeholder {
    color: #ae7b56;
    opacity: 0.8;
  }

  .login-label {
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    text-shadow: 0 1px 5px #ae7b56;
    color: #ffffff;
    margin-bottom: 10px;
    margin: 0;
  }

  .login-button {
    background-color: #ae7b56;
    color: white;
    font-size: 18px;
    padding: 10px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: "Poppins", sans-serif;
  }

  .login-button:hover {
    background-color: #e7d19b;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .login-button:active {
    background-color: #874f38;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
  }
`;
