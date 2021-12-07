import React from "react";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 550px) {
    margin-top: 20px;
  }
`;
export const WrapperMenu = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleH1 = styled.h1`
  margin-top: -20px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 550px) {
    margin-top: -30px;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
`;
export const TitleP = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #e5e5e5;
  @media (max-width: 550px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;
//  Form .. ....... //

export const WrapperForm = styled.div`
  position: relative;
`;
export const FormInput = styled.div`
  height: 54px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 1px;
`;
export const FormLocation = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 100%;
    height: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 2px;
  }

  @media (max-width: 1091px) {
    height: 100%;
    width: 48%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
`;
export const FormCategory = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 100%;
    height: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 2px;
  }
  @media (max-width: 1091px) {
    width: 48%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    border: none;
    border-top: 1px solid grey;
    width: 100%;
    height: 100%;
    & > input {
      width: 100%;
    }
  }
`;
export const FormText = styled.div`
  height: 100%;
  width: 28%;
  display: flex;
  align-items: center;
  border-left: 1px solid grey;
  padding-left: 7px;
  background-color: white;
  & > input {
    outline: none;
    border: none;
    margin-left: 5px;
    width: 100%;
    height: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 2px;
  }
  @media (max-width: 1091px) {
    width: 100%;
    height: 100%;
    border: none;
    border-top: 1px solid grey;
    & > input {
      width: 100%;
    }
  }
`;
export const FormButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 100%;
    background: #2a3a96;
    color: #ffffff;
    padding: 0px;
    font-size: 17px;
  }
  @media (max-width: 1091px) {
    width: 100%;
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: #2a3a96;
      padding: 0px;
      color: white;
      font-size: 17px;
    }
  }
`;

export const FormInputActive = styled.div`
  font-size: 14px;
`;
export const LocationStyles = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-top: 1px solid grey;
  & > div {
    flex: 1 0 97%;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: grey;
    &:hover {
      color: white;
      background: #2a3a96;
    }
  }
  & > option {
    flex: 1 0 30%;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: grey;
    &:hover {
      color: white;
      background: #2a3a96;
    }
    @media (max-width: 550px) {
      flex: 1 0 40%;
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
export const LocationSty = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-top: 1px solid grey;
  color: grey;
  & > div {
    flex: 1 0 97%;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    font-size: 14px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: grey;
    &:hover {
      color: white;
      background: #2a3a96;
    }
  }
  & > p {
    flex: 1 0 45%;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    transition: all 0.3s ease;
    margin: 0;
    padding: 15px 10px;
    &:hover {
      color: white;
      background: #2a3a96;
    }
    @media (max-width: 550px) {
      flex: 1 0 40%;
      padding: 10px 10px;
      font-size: 12px;
    }
  }
`;
export const StyledLoadingButton = styled(LoadingButton)`
  height: 100%;
  border-radius: 0px;
  &.MuiButton-root {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    padding: 0px 20px;
    border-radius: 0px;
  
  }
  && {
    background: #3545a3;
    color: white;
    padding: 0px 20px;
    border-radius: 0px;

    &:hover {
      background: #2a3a96;
    }
  }
  @media (max-width: 1265px) {
    width: 100%;
  }
`;
export const LinkStyled = styled(Link)`
  color: white;
  @media (max-width: 1265px) {
    display: block;
    width: 100%;
  }
`;
export const ButtonLink = styled.div`
  height: 54px;
  width: 100%;
  @media (max-width: 1265px) {
    display: block;
    width: 100%;
  }
`;
export const ButtonLinkItem = styled.div`
  height: 54px;
  width: 200px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1265px) {
    display: block;
    width: 100%;
  }
`;
