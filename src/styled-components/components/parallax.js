import styled from 'styled-components';
export const Parallax = styled.div`
  width: 100%;
  min-height: 400px;
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
  h2 {
    margin: 0;
    padding: 18px 0 0 0;
    text-align: center;
    background: #ffffff66;
  }
  iframe {
    width: calc(100% - 48px);
    margin: 48px 24px;
    height: 352px;
    border: 0;
    border-radius: 2px;
    .socialwall_header {
      display: none;
    }
    .socialwall_container {
      margin: 12px;
    }
  }
`;
