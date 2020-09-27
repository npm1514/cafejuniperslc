import styled from 'styled-components';
export const Parallax = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.url});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
