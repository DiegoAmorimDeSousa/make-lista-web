import styled from 'styled-components';

export const Container = styled.div`
  width: 0;
  height: 0;
  border-left: 304px solid transparent;
  border-right: 304px solid transparent;
  border-bottom: 150px solid white;
  position: absolute;
  bottom: 400px;
  left: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -304px;
    width: 608px;
    height: 150px;
    background-image: url('https://img.freepik.com/vetores-premium/design-de-padrao-de-telha-de-telhado-de-design-plano_23-2149258948.jpg');
    background-size: cover;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
`;
