import styled from 'styled-components';

import { shade, lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  img {
    max-width: 550px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    h2 {
      font-family: 'Fjalla One', serif;
    }

    p {
      margin-top: 10px;
      font-family: 'Roboto Slab', serif;
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

export const Content2 = styled.div`
  width: 100%;
  max-width: 300px;

  form {
    margin-left: 30px;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 24px;
      font-family: 'Fjalla One', serif;
    }
    input {
      background: #f6f5f5;
      border-radius: 18px;
      border: 2px solid #2d2d2d;
      width: 100%;
      padding: 13px 0 13px 10px;
      color: #2d2d2d;
      font-family: 'Roboto Slab', serif;

      & + input {
        margin-top: 15px;
      }
    }

    div {
      width: 100%;
      max-width: 300px;

      display: flex;
      justify-content: center;
      align-items: center;

      input {
        & + input {
          max-width: 50px;
          margin-left: 10px;
          margin-bottom: 15px;
        }
      }
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
  }
`;
