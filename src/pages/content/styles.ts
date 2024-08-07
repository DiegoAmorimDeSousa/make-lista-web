import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .card-content {
    display: flex;
    width: 70vw;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;