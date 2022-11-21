import styled from "styled-components";
//import img from "../../assets/rafiki.png";
import colors from "./colors";

// export const MainImagePosts = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100vh;
//   width: 100%;
// `;
export const UlElement = styled.ul`
  position: absolute;
  left: 20%;
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 1475px) {
    grid-template-columns: repeat(4, 8fr);
    left: 25%;
  }
  @media (max-width: 1271px) {
    grid-template-columns: repeat(3, 8fr);
    left: 30%;
  }
  @media (max-width: 1035px) {
    grid-template-columns: repeat(2, 8fr);
    left: 40%;
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(3, 8fr);
    left: 10%;
    top: 20%;
  }
  @media (max-width: 628px) {
    left: 3%;
  }
  @media (max-width: 590px) {
    left: 0%;
  }
  @media (max-width: 544px) {
    left: 10%;
    grid-template-columns: repeat(2, 6fr);
  }
  @media (max-width: 444px) {
    grid-template-columns: repeat(1, 6fr);
    left: 20%;
  }
  @media (max-width: 414px) {
    grid-template-columns: repeat(2, 6fr);
    top: 20%;
    left: -2%;
  }
  @media (max-width: 375px) {
    left: -5%;
  }
`;
export const LiElement = styled.li`
  font-size: 25px;
  margin: 10px;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  height: 40px;
  width: 200px;
  list-style: none;
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  padding: 35px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 820px) {
    height: 30px;
    width: 150px;
    padding: 15px 0px 20px 0px;
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
`;
