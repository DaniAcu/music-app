import styled from 'styled-components';

export const IconContainer = styled.div`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
`;

export const Title = styled.h1`
  position: relative;
  align-items: center;
  background: linear-gradient(
      45deg,
      rgba(31, 38, 55, ${({ image }) => (image ? 0.7 : 1)}) 0%,
      rgba(37, 53, 89, ${({ image }) => (image ? 0.7 : 1)}) 35%,
      rgba(27, 65, 157, ${({ image }) => (image ? 0.7 : 1)}) 100%
    )
    ${({ image }) => image && `, url(${image})`};
  display: flex;
  font-weight: normal;
  justify-content: center;
  margin: 0;
  padding: 3em 1em;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0% 0%, 0% 90%, 50% 80%, 100% 90%, 100% 0%);
  box-sizing: border-box;
  text-align: center;
`;

export const Container = styled.div`
  position: relative;
  padding-bottom: 5em;
  background-color: #1f2738;
  width: 100%;
  height: calc(100vh - 14.5em);
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #1f2738;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #1f2738;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ee4b6b;
  }
`;
