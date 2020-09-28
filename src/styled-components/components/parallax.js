import styled from 'styled-components';
export const Parallax = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.mobileurl});
  background-attachment: fixed;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  @media(min-width: 700px){
    background-image: url(${props => props.desktopurl});
  }
`;
