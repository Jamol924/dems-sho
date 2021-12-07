import React from "react";
import clock from "../assets/clock.svg";
import location from "../assets/location.svg";
import styled from "styled-components";
import NoImages from "../assets/NoImages.jpg";
import { Wrapper, StyledInfo, MenuSection } from "./MaterialComponent/images";
import { Typography } from "@mui/material";
import CarouselApp from "./productSlides/Slides";

const Image = ({ dataProduct }) => {
  function day(dataProduct) {
    if (dataProduct == null) {
      return null;
    }
    let d = new Date(dataProduct).toISOString().slice(0,-14);
    return d;
  }
  return (
    <Wrapper>
      {dataProduct.images.length >= 1 ? (
        <CarouselApp dataImg={dataProduct} />
      ) : (
        <img
          height="300px"
          width="auto"
          objectFit="cover"
          src={NoImages}
          alt="No images"
        />
      )}

      <MenuSection>
        <StyledTypography>{dataProduct.title}</StyledTypography>
        <StyledTypo>
          {dataProduct.price} <span>{dataProduct.currency}</span>
        </StyledTypo>
      </MenuSection>

      <StyledInfo>
        <div>
          <img src={clock} /> <p>{day(dataProduct.expired_at)}</p>
        </div>
        <div>
          <img src={location} />
          <p>{dataProduct.city_name}</p>
        </div>
      </StyledInfo>
    </Wrapper>
  );
};

export default Image;

export const StyledTypo = styled.div`
  font-weight: 800;
  font-size: 50px;
  line-height: 23px;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 25px 0px;
  @media (max-width: 550px) {
    font-weight: 500;
    font-size: 40px;
    line-height: 20px;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    margin: 20px 0px;
  }
`;
export const StyledTypography = styled(Typography)`
  &&.css-ahj2mt-MuiTypography-root {
    font-size: 50px;
  }
  @media (max-width: 550px) {
    &&.css-ahj2mt-MuiTypography-root {
      font-size: 35px;
    }
  }
  @media (max-width: 350px) {
    &&.css-ahj2mt-MuiTypography-root {
      font-size: 25px;
    }
  }
`;
