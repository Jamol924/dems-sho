import React, { useEffect } from "react";
import Image from "../../../components/Image";
import Info from "../../../components/Info";
import Features from "../../../components/Features";
import SellerInfo from "../../../components/SellerInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../../redux/active/productActions";
import LoaderSpinner from "../../../Loader/loader";
import axios from "axios";
import {
  Wrapper,
  Left,
  Right,
} from "../../../components/MaterialComponent/MainInfo";

const MainInfo = () => {
  const productCard = useSelector((state) => state.productCard);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    await axios
      .post(`http://dems.inone.uz/api/ad/get-by-id`, {
        limit: 10,
        _id: `${productId}`,
      })
      .then((res) => {
        console.log(res);
        dispatch(selectedProduct(res.data.data));
      })
      .catch((err) => {
        console.log("Err", err);
      }); 
  };

  useEffect(() => {
    if (productId && productId !== " ") fetchProductDetail();
  }, [productId]);

  return (
    <div>
      {Object.keys(productCard).length === 0 ? (
        <LoaderSpinner />
      ) : (
        <Wrapper>
          <Left>
            <Image dataProduct={productCard} />
            <Info dataInfo={productCard} />
            <Features dataFeatures={productCard} />
          </Left>
          <Right>
            <SellerInfo dataSeller={productCard} />
          </Right>
        </Wrapper>
      )}
    </div>
  );
};

export default MainInfo;
