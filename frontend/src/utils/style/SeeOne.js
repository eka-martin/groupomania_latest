import styled from "styled-components";
//import img from "../../assets/see-one.jpg";
import colors from "./colors";

// export const MainImageSeeOne = styled.div`
//   background: url(${img}) no-repeat center/cover;
//   height: 100vh;
//   width: 100%;
// `;
export const PostCard = styled.div`
  position: fixed;
  left: 23%;
  top: 5%;
  height: 200px;
  margin-right: 500px;
  margin-left: 100px;
  @media (max-width: 820px) {
    left: 7%;
    top: 15%;
  }
  @media (max-width: 768px) {
    left: 5%;
  }
  @media (max-width: 414px) {
    position: absolute;
    left: -10%;
    top: 15%;
    margin-right: 0;
    margin-left: 0;
  }
  @media (max-width: 375px) {
    left: 0%;
    top: 12%;
  }
`;
export const PostName = styled.h1`
  position: relative;
  left: 50%;
  color: white;
  font-size: 40px;
  @media (max-width: 820px) {
    font-size: 35px;
    left: 25%;
  }
  @media (max-width: 768px) {
    left: 20%;
    top: 5%;
  }
  @media (max-width: 414px) {
    left: 0%;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    left: 25%;
  }
`;
export const PostDescription = styled.p`
  position: relative;
  color: white;
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 820px) {
    font-size: 19px;
    left: -17%;
  }
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
  @media (max-width: 632px) {
    left: -15%;
  }
  @media (max-width: 556px) {
    min-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 466px) {
    left: -20%;
    min-width: 300px;
    max-height: 300px;
  }
  @media (max-width: 414px) {
    left: 5%;
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
  @media (max-width: 1286px) {
    bottom: 14%;
  }
  @media (max-width: 1046px) {
    left: 45%;
  }
  @media (max-width: 820px) {
    left: 32%;
    bottom: 12%;
  }
  @media (max-width: 768px) {
    left: 32%;
    bottom: 9%;
  }
  @media (max-width: 466px) {
    left: 18%;
  }
  @media (max-width: 414px) {
    left: 15%;
    bottom: 20%;
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
  @media (max-width: 1286px) {
    bottom: 5%;
    left: 80%;
  }
  @media (max-width: 1046px) {
    left: 57%;
  }
  @media (max-width: 820px) {
    left: 45%;
    bottom: 5%;
  }
  @media (max-width: 768px) {
    left: 38%;
    bottom: 3%;
  }
  @media (max-width: 466px) {
    left: 30%;
  }
  @media (max-width: 414px) {
    left: 30%;
    bottom: 10%;
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
