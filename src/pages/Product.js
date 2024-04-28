import React, { useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts/RelatedProsucts";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return <div>
          <Breadcrum product={product}/> 
          <ProductDisplay product={product}/>
          <DescriptionBox/>
          <RelatedProducts/>
         </div>;
};
export default Product;
