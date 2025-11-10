import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [data, setData] = useState([]);

  // Demo fallback products in case backend is not ready
  const demoProducts = [
    {
      productid: 1,
      productName: "Organic Apple",
      description: "Fresh and juicy organic apples",
      price: 120,
      img: "./images/apple.jpg",
    },
    {
      productid: 2,
      productName: "Organic Carrot",
      description: "Healthy orange carrots",
      price: 80,
      img: "./images/carrot.jpg",
    },
    {
      productid: 3,
      productName: "Organic Milk",
      description: "Fresh dairy milk",
      price: 50,
      img: "./images/milk.jpg",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axiosFetch({
        url: "product/", // your backend endpoint
        method: "GET",
      });

      // Ensure data is always an array
      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.warn("Backend returned invalid data, using demo products");
        setData(demoProducts);
      }
    } catch (err) {
      console.error("Failed to fetch products, using demo products", err);
      setData(demoProducts);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="products" className="section product">
      <div className="container">
        <p className="section-subtitle">-- Organic Products --</p>
        <h2 className="h2 section-title">All Organic Products</h2>

        <ul className="filter-list">
          <li>
            <button className="filter-btn active">
              <img src="./images/filter-1.png" width={20} alt="" className="default" />
              <img src="./images/filter-1-active.png" width={20} alt="" className="color" />
              <p className="filter-text">Fresh Vegetables</p>
            </button>
          </li>
          <li>
            <button className="filter-btn">
              <img src="./images/filter-2.png" width={20} alt="" className="default" />
              <img src="./images/filter-2-active.png" width={20} alt="" className="color" />
              <p className="filter-text">Fish &amp; Meat</p>
            </button>
          </li>
          <li>
            <button className="filter-btn">
              <img src="./images/filter-3.png" width={20} alt="" className="default" />
              <img src="./images/filter-3-active.png" width={20} alt="" className="color" />
              <p className="filter-text">Healthy Fruit</p>
            </button>
          </li>
          <li>
            <button className="filter-btn">
              <img src="./images/filter-1.png" width={20} alt="" className="default" />
              <img src="./images/filter-1-active.png" width={20} alt="" className="color" />
              <p className="filter-text">Dairy Products</p>
            </button>
          </li>
        </ul>

        <ul className="grid-list">
          {data && data.length > 0 ? (
            data.map((item) => (
              <ProductCard
                key={item.productid}
                id={item.productid}
                name={item.productName}
                description={item.description}
                price={item.price}
                img={item.img}
              />
            ))
          ) : (
            <li>No products available</li>
          )}
        </ul>
      </div>
    </section>
  );
};

