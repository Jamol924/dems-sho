import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setProducts, Scrol } from "../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import PaginationLink from "../../../components/pagenaton/Paginat.js";
import L from "../../../locale/language.json";
import axios from "axios";
import Tovar from "../../../components/common/Tovar.js";
import LoaderSpinner from "../../../Loader/loaderSpiner.js";

const AdCard = () => {
  const lan = useSelector((state) => state.allLanguage);
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);
  const scr = useSelector((state) => state.allScrol);
  const filters = useSelector((state) => state.Search.data);
  console.log(scr)
  const [pag, setPag] = useState(1);
  const [numberOf, setNumberOf] = useState();
  const productFetch = async () => {
    const instance = axios.create({
      baseURL: "http://dems.inone.uz/api/",
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    await instance
      .post("ad/latest/get-pagin", {
        limit: 10,
        page: pag,
      })
      .then((res) => {
        console.log(res);
        dispatch1(setProducts(res.data.data.data));
        setNumberOf(res.data.data.total);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  const [ scrol, setScrol ] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch1(Scrol(scrol))
  }, [scrol])

  useEffect(() => {
    productFetch();
  }, [pag]);
  console.log(products1.length);

  return (
    <div style={{ maxWidth: "100%" }}>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.cardname[lan]}</h1>
          </div>
          {products1.length === 0 ? (
          <StyledLoader>
            <div>
              <LoaderSpinner />
            </div>
          </StyledLoader>
           ) : ( 
          <>
            <Row onClick={() => setScrol((scrol) => !scrol )}>

               <Tovar scrol={scrol} datas={products1} />
            
            </Row>
            <PaginationLink setPag={setPag} pagNumber={numberOf} />
          </>
           )}
        </div>
      </Wrapper>
    </div>
  );
};

export const StyledLoader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 200px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 15px;
    text-align: center;
    padding-bottom: 5px;
    font-family: "Quicksand", sans-serif;
    margin-top: 69px;
    margin-bottom: 43px;
  }
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    h1 {
      margin-top: 30px;
      margin-bottom: 43px;
    }
    .content {
      max-width: 100%;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 350px) {
    h1 {
      font-size: 20px;
      line-height: 12px;
      text-align: center;
      padding-bottom: 4px;
      font-family: "Quicksand", sans-serif;
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
`;

export const Row = styled.div`
  width: 1020px;
  height: auto;
  display: flex;
  margin-right: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1066px) {
    width: 770px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 800px) {
    width: 530px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 550px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default AdCard;
