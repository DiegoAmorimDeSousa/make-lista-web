import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: white;
  min-width: 15vw;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  background: #444444;
  color: white;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  margin: 0 0 15px 0;
`;

export const Content = styled.div`
  padding: 0 15px;  

  .input-box {
    margin-bottom: 20px;
  }

  .input-box > div {
    margin-bottom: 5px;
  }

  .input-box input[type="checkbox"] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .input-box label {
    font-size: 16px;
    color: #333;
  }

  .input-box a {
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
  }

  .input-box a:hover {
    text-decoration: underline;
  }

  .input-box div:nth-child(2),
  .input-box div:nth-child(3),
  .input-box div:nth-child(4) {
    font-size: 14px;
    color: #666;
  }

  .sub-item {
    margin-left: 15px;
  }

  .input-group {
    display: flex;
    align-items: center;
  }
`;