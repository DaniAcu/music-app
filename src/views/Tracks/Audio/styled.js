import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2c374c;
  padding: 1em 3em;
  cursor: pointer;

  &:hover {
    background: #2c374c;
  }

  h3 {
    padding-right: 1em;
  }
`;

export const Card = styled.div`
  align-items: center;
  background: #ee4b6b;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  position: fixed;
  max-width: 430px;
  width: 100%;
`;
