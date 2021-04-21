import styled from 'styled-components';

export const JobsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  a {
    color: #ffffff90;
    transition: color 0.5s;
  }
  a:hover {
    color: #fff;
  }
  h4 {
    margin: 12px 0;
  }
  h2 {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
  h2:hover {
    opacity: 1;
  }
`;
export const Toast = styled.h2`
  text-align: center;
  color: rgb(252, 214, 215);
  margin: 0;
  background: #29292990;
  padding: 12px 0;
`;
