import styled from 'styled-components';

import { shade, lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3em 0;
  width: 100%;

  p {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    > Button {
      background: #474ebb;
      border-radius: 10px;
      border: 0;
      margin: 25px 0 0 0;
      padding: 15px 70px;
      font-family: 'Roboto Slab', serif;
      transition: background-color 0.4s;

      &:hover {
        background: ${lighten(0.05, '#474EBB')};
      }

      & + button {
        margin: 0 0px 0 3em;
        padding: 2px 10px;
      }
    }

    #svg_button {
      margin: 15px 10px 0 35px;
      padding: 10px;
      display: flex;
      background: transparent;

      svg {
        transition: color 0.3s;
        color: #474ebb;

        &:hover {
          color: ${shade(0.3, 'red')};
        }
      }
    }
  }
`;

export const Content2 = styled.div`
  max-width: 900px;
  h1 {
    margin-bottom: 24px;
    font-family: 'Fjalla One', serif;
  }
`;

export const Content3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
`;

export const BoxOfContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 420px;
  width: 420px;
  height: 300px;
  margin: 15px 0;

  border-radius: 6px;
  box-shadow: 2px 2px 8px;
  border: 1px solid black;
  text-decoration: none;

  color: black;

  transition: border 0.5s;

  &:hover {
    border: 2.6px solid #474ebb;
  }

  .div-conteudo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      margin: 0 0 0 4px;

      p {
        font-family: 'Roboto Slab', serif;

        strong {
          font-size: 18px;
        }
      }
    }
  }

  button {
    margin: 15px 15px 0 0;
    width: 25px;
    height: 25px;
    border: 0;
    background: transparent;

    svg {
      color: #474ebb;
      transition: color 0.3s;
      width: 100%;
      height: 100%;

      &:hover {
        color: ${shade(0.3, 'red')};
      }
    }
  }
`;
