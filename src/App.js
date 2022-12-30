import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllCryptocurrencies from "./components/AllCryptocurrencies";
import Contact from "./components/Contact";
import MyCryptocurrencies from "./components/MyCryptocurrencies";
import ProtectedRoute from "./components/ProtectedRoute";
import NFT from "./components/NFT";
import Page404 from "./components/Page404";
import { Routes, Route } from "react-router-dom";
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Provider store={store}>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/MyCryptocurrencies"
          exact
          element={
            <ProtectedRoute user={user}>
              <MyCryptocurrencies />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/AllCryptocurrencies" element={<AllCryptocurrencies />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
