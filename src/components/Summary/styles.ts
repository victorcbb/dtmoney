import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;

    padding: 1.5rem 2rem;

    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content :space-between;
    }

    strong {
      display: block;

      margin-top: 1rem;

      font-weight: 500;
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  .hightlighBackground {
    background: var(--green);
    color: var(--shape);
  }
`