import styled from 'styled-components';
import { shade, lighten } from 'polished';

import BackgroundPessoal from '../../assets/volunteers3.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  h1 {
    font-family: 'Fjalla One', serif;
    font-size: 70px;
    margin-left: 25px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      font-family: 'Fjalla One', serif;
    }



    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;

      button {
        background: #474EBB;
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
        color: #7D7FCF;
        text-decoration: none;
        margin-top: 15px;
        transition: color 0.4s;
        font-family: 'Roboto Slab', serif;

        &:hover {
          color: ${shade(0.3, '#7D7FCF')};
        }
      }
    }
  }

  > a {
      color: #474EBB;
      text-decoration: none;
      margin-top: 15px;
      font-size: 18px;

      display: flex;
      align-items: center;
      font-family: 'Roboto Slab', serif;

      transition: color 0.4s;

      &:hover {
        color: ${lighten(0.2, '#474EBB')};
      }
      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Background = styled.div`
  @media only screen and (max-width: 850px) {
    img {
      display: none;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 600px;
  }
`;
//  background: url(${BackgroundPessoal}) no-repeat;
