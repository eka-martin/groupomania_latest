import styled from "styled-components";
import colors from "./colors";


export const UlElement = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 20%;
  right: 3%;
  @media (max-width: 768px) {
    
  }
  @media (max-width: 375px) {
    top: 50%;
  }
`;
export const LiElement = styled.li`
  font-size: 25px;
  margin: 20px;
  background-color:  ${colors.secondary};
  height: 100%;
  width: 300px;
  list-style: none;
  border-radius: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  padding: 35px 35px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    
    width: 150px;
    padding: 15px 0px 20px 0px;
    font-size: 20px;
  }
 
  @media (max-width: 375px) {
    font-size: 17px;
    margin-top: 300px;
  }
`;
