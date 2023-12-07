import styled from "styled-components";


export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;

  @media screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

export const CircularMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid black; // Добавлено для визуализации

  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 200px;
    border: 0;
  }
`;

export const CenterHeight = styled.div`
  position: absolute;
  background: rgba(66, 86, 122, 1);
  width: 1px;
  height: auto;
  min-height: 140vh;
  top: 0;
  left: 50%;
  opacity: 0.1;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const CenterWidth = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  background: rgba(66, 86, 122, 1);
  width: 1440px;
  height: 1px;
  min-width: 100vh;
  top: 0;
  margin-top: 365px;
  opacity: 0.1;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const MenuContent = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 530px;
  height: 530px;
  border: 1px solid #42567A;
  border-radius: 50%;
  transform-origin: center;

  @media screen and (max-width: 1000px) {
    float: left;
    left: 0;
    border: none;
    width: 0;
    height: 0;
    top: 200px;
    margin: 0 auto;
  }
`;

export const Years = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  b {
    margin: 40px;
    font-size: 200px;
    cursor: auto;
    user-select: none;
    -webkit-user-select: none;

    @media screen and (max-width: 1000px) {
      margin: 15px;
      font-size: 75px;
    }
  }
`;
