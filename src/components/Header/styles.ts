import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: var(--blue); 
`

export const Contenet = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;

    font-size: 1rem;
    color: var(--shape);

    background: var(--blue-light);
    border: none;
    border-radius: 4px;

    padding: 0 2rem;

    transition: all 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`
