import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components"
function LoaderSpinner() {
  return (
    <LoaderContainer>
      <Loader
        type="Bars"
        color="#2a3a96"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </LoaderContainer>
  );
}

export default LoaderSpinner;


const LoaderContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
