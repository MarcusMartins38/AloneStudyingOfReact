import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin-top: 15px;
  }

  textArea {
    background: #f6f5f5;
    border-radius: 18px;
    border: 2px solid #2d2d2d;
    width: 100%;
    padding: 16px;
    color: #2d2d2d;
    font-family: 'Roboto Slab', serif;
  }
`;
