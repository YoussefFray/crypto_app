import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCryptocurrencies.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const AllCryptocurrencies = () => {
  const [data, setData] = useState(null);
  const [numberOfLines, setnumberOfLines] = useState(10);

  // error
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=" +
    numberOfLines +
    "&page=1&sparkline=false";
  const changeNumber = () => {
    setnumberOfLines(document.getElementById("nol").value);
  };
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setInterval(setData(response.data), 216000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, numberOfLines]);

  // console.log(data)

  if (!data) {
    return (<div>loding</div>);
  }
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <br></br>
          <div className="input-container">
            <input id="nol" type="number" placeholder="number of lines" />
            <button className="btn" onClick={changeNumber}>
              add
            </button>
          </div>
          <br></br>
          <h2>Today's Cryptocurrency Prices (Top {numberOfLines})</h2>
          <br></br>

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
                {data.map((dataC) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllCryptocurrencies;
