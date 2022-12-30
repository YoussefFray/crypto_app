import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import "./MyCryptocurrencies.css";
import axios from "axios";
import { useSelector } from "react-redux";
const MyCryptocurrencies = () => {
  const state = useSelector((state) => state.user.value);
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";
  axios
    .get(url)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  if (!data) {
    return <div>loding</div>;
  }

  return (
    <div>
      <p>First Name : {state.firstName}</p>
      <p>Last Name : {state.lastName}</p>
      <p>Wallet Adresse : {state.wallet}</p>
      <br></br> <br></br> <br></br>
      <div className="wrapper">
        <div className="container">
        

          <div className="table">
            <table>
              <thead>
                <tr>
                  <td>rank</td>
                  <td>Logo</td>
                  <td>Name</td>
                  <td>current_price</td>
                  <td>price change percentage 24h</td>
                </tr>
              </thead>
              <tbody>
      {data.map((dataC) =>
        state.F_Crypto.includes(dataC.name) ? 
        (
          <tr>
          <td>{dataC.market_cap_rank}</td>
          <td>
            <img src={dataC.image} alt="" />
          </td>
          <td>{dataC.name}</td>
          <td>${dataC.current_price.toLocaleString()}</td>
          <td>
            {dataC.price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon" />
                {dataC.price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {dataC.price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </td>
        </tr>
        
        
        
          ) : (<p></p>)
      )}










</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
 
  );
};
export default MyCryptocurrencies;
