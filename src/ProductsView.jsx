import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {useState} from "react";

function ProductsView() {
  const params = useParams()
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

const [productData, setProductData] = useState({})


  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
    let product = await axios.get(`https://63770e2081a568fc250af1f6.mockapi.io/product/${params.productid}`);
    setProductData (product.data); 
  } catch (error) {

    }
  }

 return (
    <>
  <h3>Name : {productData.name}</h3>
  <h3>Model : {productData.model}</h3>
  <h3>Price : {productData.price}</h3>
  <h3>Ram : {productData.ram}</h3>
  <h3>Rom : {productData.rom}</h3>
  <h3>Color : {productData.color}</h3>
    </>
  )
}

export default ProductsView