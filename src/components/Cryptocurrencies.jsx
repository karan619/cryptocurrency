import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoAPI";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  //console.log(cryptos);
  if (isFetching) return <Loader />;
  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <div className="crypto-card-conatiner">
          <Row gutter={[32, 32]}>
            {cryptos?.map((currency) => (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.id}
              >
                <Link to={`/crypto/${currency.id}`}>
                  <Card
                    title={`${currency.rank}.${currency.name}`}
                    extra={
                      <img className="crypto-image" src={currency.iconUrl} />
                    }
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily: {millify(currency.change)}</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
