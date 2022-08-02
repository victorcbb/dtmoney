import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #f0f2f5;
    --red: #E62E4D;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green: #33CC95;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
  }

  html {
    @media (max-width: 1079px) {
      font-size: 93.75%;
    }

    @media (max-width: 719px) {
      font-size: 87.5%;
    }
  }
    

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text-body)
  }

  h1, h2, h3, strong, button {
    font-weight: 600;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: all 0.15s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
