import styled, { css } from "styled-components";

const activeStyle = css`
  background: #F4F5F9;
  border: 1px solid rgba(48, 62, 88, 0.5);
  width: 56px;
  height: 56px;
  font-size: 20px;
  color: #42567A;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
`;

export const MenuItemContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #133334;
  outline: none;
  color: white;
  font-size: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${activeStyle}
  }

  ${({ isActive }) => isActive && activeStyle}

  @media screen and (max-width: 1000px) {
    display: flex;
    background-color: transparent;
    &:hover {
      background: transparent;
      border: none;
      width: 0;
      height: 0;
      font-size: 0;
      color: #42567A;
      cursor: initial;
      line-height: 50px;
      text-align: inherit;
    }
  }
`;

export const MenuItemIcon = styled.i<{ isActive: boolean }>`
  ${props => props.isActive && activeStyle}
`;



export const MenuItemText = styled.b<{ isActive: boolean }>`
  position: absolute;
  display: none;
  left: 60px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #42567A;
  font-size: 20px;

  ${props => props.isActive && css`display: flex;`}

  @media screen and (max-width: 1000px) {
    left: 20px;
    text-align: left;
  }
`;
