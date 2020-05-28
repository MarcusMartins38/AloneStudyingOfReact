import styled from 'styled-components';

import { shade, lighten } from 'polished';

export const Container = styled.div`
  height: 80vh;
  max-width: 1000px;
  max-height: 800px;
  margin: 50px auto 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 16px;
  border-radius: 15px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;

  form {
    margin-left: 30px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 24px;
      font-family: 'Fjalla One', serif;
    }

    input {
      width: 400px;
    }

    button {
      background: #474ebb;
      border-radius: 18px;
      border: 0;
      margin: 25px 0 0 0;
      padding: 15px 70px;
      font-family: 'Roboto Slab', serif;
      transition: background-color 0.4s;

      &:hover {
        background: ${lighten(0.05, '#474EBB')};
      }
    }
    a {
      color: #474ebb;
      text-decoration: none;
      margin-top: 35px;
      font-size: 18px;
      font-family: 'Roboto Slab', serif;

      display: flex;
      align-items: center;

      transition: color 0.4s;

      &:hover {
        color: ${shade(0.3, '#474EBB')};
      }
      svg {
        margin-right: 10px;
      }
    }
  }
`;
