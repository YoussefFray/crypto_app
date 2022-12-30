import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NFT.css";
 const text = '[{"id":"56562", "link":"https://uploads-ssl.webflow.com/5f9a1900790900e2b7f25ba1/62545162b2e07568b0110187_FEATURED_IMAGE-nfts-myths-misconceptions.png", "price": "25000"},{"id":"56529", "link":"https://www.cnet.com/a/img/resize/c89f82e1f00558858ba1f43ca45a57db89918681/hub/2022/05/11/4efd87fd-8d98-45ee-8bb7-16721edd3685/1-cdn3l9ehkspsxirjfrysyw.png?auto=webp&fit=crop&height=1200&width=1200", "price": "75000"},{"id":"56562", "link":"https://924234.smushcdn.com/2329743/wp-content/uploads/2021/10/os-nfts-estao-mudando-tudo-mas-sao-feitos-para-durar-dica-alguns-sao.jpg?lossy=1&strip=1&webp=1", "price": "55000"}]';
 const obj = JSON.parse(text);
const NFT = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <br></br>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <td>Name</td>
                  <td>current price</td>
                </tr>
              </thead>
              <tbody>
                {obj.map((dataC) => (
                  <tr>
                    <td>{dataC.id}</td>
                    <td>
                    <img src={dataC.link} alt="test"    />
                    </td>
                    <td>{dataC.price}</td>
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
export default NFT;
