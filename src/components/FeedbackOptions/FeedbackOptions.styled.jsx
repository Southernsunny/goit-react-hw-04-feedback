import styled from '@emotion/styled';

export const BtnBox = styled.div`
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  font-size: 18px;
  font-family: inherit;
  background: #fff;
  border: none;
  border-radius: 50px;
  color: #000;
  transition: all 0.4s;

  &:hover {
    box-shadow: inset 0 0 0 2px #ef476f, inset 0 0 0 4px #ffd166, inset 0 0 0 6px #06d6a0,
      inset 0 0 0 8px #118ab2;
    background: #073b4c;
    color: #fff;
  }

  &:not(:first-of-type) {
    margin-left: 20px;
  }
`;
