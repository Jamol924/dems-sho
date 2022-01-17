import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  return (
    <Link to={props.id}>
      <StyledCategoryItem style={{ backgroundColor: `${props.color}` }}>
        <StyledImg src={props.img} />
        <StyledTitle>{props.title}</StyledTitle>
      </StyledCategoryItem>
    </Link>
  );
};

export const StyledCategoryItem = styled.div`
  width: 235px;
  height: 149px;
  margin: 20px;
  display: flex;
  background: #f5f7fa;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  @media (max-width: 550px) {
    width: 110px;
    height: 90px;
    margin: 10px;
    display: flex;
    border-radius: 10px;
    border-radius: 8px;
  }
`;
export const StyledImg = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  -webkit-transition: all 0.9s;
  transition: all 0.9s;
  z-index: 10;
  @media (max-width: 550px) {
    width: auto;
    height: 80%;
    margin: 0px;
    display: flex;
    border-radius: 10px;
    border-radius: 8px;
  }
`;
export const StyledTitle = styled.p`
  position: absolute;
  top: -30px;
  left: 10px;
  z-index: 22;
  color: white;
  font-size: 20px;
  color: #2a2a2a;
  font-weight: 800;
  @media (max-width: 550px) {
    font-size: 9px;
    top: -25px;
    left: 10px;
  }
`;

export default CategoryItem;
