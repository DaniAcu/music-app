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
`;

export const ItemImage = styled.img`
  width: 4em;
  height: 4em;
  border-radius: 100%;
`;

export const ItemDescription = styled.h3`
  text-align: right;
  h3 {
    margin: 0;
  }

  span {
    font-weight: normal;
    font-size: 12px;
  }
`;
