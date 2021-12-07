import React, { useState, useEffect } from "react";
import Adsjr from "../../../../components/common/Adsjr";
import { setProducts } from "../../../../redux/active/productActions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import PaginationLink from "../../../../components/pagenaton/Paginat";
import { Wrapper, Row } from "../../home/Ads";
import L from "../../../../locale/language.json";
import LoaderSpinner from "../../../../Loader/loaderSpiner";
import images from "../../../../assets/removeQuti.png";

const CardAuto = ({ filters }) => {
  const dispatch1 = useDispatch();
  const products1 = useSelector((state) => state.allProducts.products);
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
      .post("ad/get-pagin", {
        limit: 10,
        page: pag,
        search: "",
        type: "home",
      })
      .then((res) => {
        setNumberOf(res.data.data.total);
        dispatch1(setProducts(res.data.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  const Filter = products1.filter(
    (eliment) =>
      (filters.location === 1
        ? eliment.region_id !== filters.location
        : filters.location
        ? eliment.region_id === filters.location
        : true) &&
      (filters.search
        ? eliment.title.toLowerCase().includes(filters.search.toLowerCase())
        : true)
  );

  useEffect(() => {
    productFetch();
  }, [pag]);
  const lan = useSelector((state) => state.allLanguage);

  return numberOf === 0 ? (
    <>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.category.job[lan]}</h1>
          </div>
          <div>
            <img style={{ maxWidth: "100%" }} src={images} />
          </div>
        </div>
      </Wrapper>
    </>
  ) : (
    <div>
      <Wrapper>
        <div className="content">
          <div>
            <h1>{L.category.home[lan]}</h1>
          </div>
          {products1.length === 0 ? (
            <>
              {" "}
              <LoaderSpinner />{" "}
            </>
          ) : (
            <>
              <Row>
                <Adsjr datas={Filter.length >= 0 ? Filter : products1} />
              </Row>
              <PaginationLink setPag={setPag} pagNumber={numberOf} />
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default CardAuto;
