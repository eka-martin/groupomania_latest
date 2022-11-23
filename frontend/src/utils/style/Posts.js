import styled from "styled-components";
import colors from "./colors";


export const UlElement = styled.ul`
  position: absolute;
  left: 20%;
  display: grid;
  grid-template-columns: repeat(5, 5fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 8fr);
    left: 10%;
    top: 20%;
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
  background-color:  ${colors.secondary};
  height: 100%;
  width: 200px;
  list-style: none;
  border-radius: 10px;
  text-align: center;
  padding: 35px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    height: 30px;
    width: 150px;
    padding: 15px 0px 20px 0px;
    font-size: 20px;
  }
 
  @media (max-width: 375px) {
    font-size: 17px;
  }
`;
