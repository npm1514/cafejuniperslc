import styled from 'styled-components';
export const Parallax = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.url});
  background-attachment: scroll;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  &.mobile-parallax {
    display: none;
  }
  @media(min-width: 700px){
    &.mobile-parallax {
      display: block;
    }
    background-attachment: fixed;
  }
`;
