import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  min-width: 30px;
`;

const PATHS = {
  'arrow-back': [
    `M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
    c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
    c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z`
  ],
  'pause': [
    `M14.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C15.5,0.447,15.052,0,14.5,0z`,
    `M27.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28.5,0.447,28.052,0,27.5,0z`
  ],
  'play': [
    `M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z`
  ]
};

export const Icon = ({ type, color = 'white', onClick }) => {
  const pathData = PATHS[type];

  if (!pathData) {
    console.warn(`Unsupported type "${type}" specified for Icon`);
    return null;
  }

  return (
    <Svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 42 42"
    >
      {pathData.map(path => (
        <path fill={color} d={path} />
      ))}
    </Svg>
  );
};

export default Icon;
