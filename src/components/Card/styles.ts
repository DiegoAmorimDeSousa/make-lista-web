import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 20px;
  /* padding: 15px; */
  background: white;

  & .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  background: #444444;
  color: white;
  border-radius: 20px 20px 0 0;
  padding: 10px;
`;