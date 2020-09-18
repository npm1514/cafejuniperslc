import styled from 'styled-components';

export const Hex = styled.svg`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  polygon {
    fill: ${props => props.color};;
    stroke-width: 0;
  }
`;
