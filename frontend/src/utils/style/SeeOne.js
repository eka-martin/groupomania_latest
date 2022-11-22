import styled from "styled-components";
import colors from "./colors";


export const PostCard = styled.div`
  position: fixed;
  left: 23%;
  top: 5%;
  height: 200px;
  margin-right: 500px;
  margin-left: 100px;
  
  @media (max-width: 768px) {
    left: 5%;
  }
  
  @media (max-width: 375px) {
    left: 0%;
    top: 12%;
  }
`;
export const PostName = styled.h1`
  position: relative;
  left: 50%;
  color: black;
  font-size: 40px;
  
  @media (max-width: 768px) {
    left: 20%;
    top: 5%;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    left: 25%;
  }
`;
export const PostDescription = styled.p`
  position: relative;
  color: black;
  font-size: 30px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    left: -15%;
    font-size: 18px;
  }
  @media (max-width: 375px) {
    left: 0%;
  }
`;
export const PostImage = styled.img`
  position: relative;
  width: 50%;
  max-width: 500px;
  min-width: 500px;
  max-height: 500px;
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    left: -15%;
  }
  
  @media (max-width: 375px) {
    min-width: 200px;
    margin-top: 0px;
    left: 0%;
  }
`;
export const Buttons = styled.div`
  position: absolute;
  left: 70%;
  bottom: 40%;
  
  @media (max-width: 768px) {
    left: 32%;
    bottom: 9%;
  }
  
  @media (max-width: 375px) {
    bottom: 10%;
    left: 10%;
  }
`;
export const ModifyButton = styled.button`
  font-size: 30px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  position: relative;
  left: 0%;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const DeleteButton = styled.button`
  font-size: 30px;
  padding: 0.5rem;
  border-radius: 10px 10px 10px 10px;
  position: relative;
  right: -10%;
  cursor: pointer;
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  &:hover {
    opacity: 0.8;
  }
`;
export const LikeAndDislike = styled.div`
  position: absolute;
  left: 76%;
  bottom: 30%;
  
  @media (max-width: 768px) {
    left: 38%;
    bottom: 3%;
  }
  @media (max-width: 375px) {
    bottom: 0%;
    left: 27%;
  }
`;
export const Like = styled.div`
  position: relative;
  left: 0%;
  font-size: 40px;
  color: black;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    left: 100%;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  top: 0%;
  left: 0%;
`;
