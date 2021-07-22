import React, { useEffect, useState } from "react";
import "../covidTracker/covid.css";
const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="container-fluid mt-5">
                <div className="main-heading">
                  <h1 className="mb-5 text-center">
                    <span className="font-weight-bold">INDIA </span>COVID-19
                    Data
                  </h1>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>State</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                      <th>active</th>
                      <th>Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((curElem, ind) => {
                      return (
                        <tr key={ind}>
                          <th>{curElem.state}</th>
                          <td>{curElem.confirmed}</td>
                          <td>{curElem.recovered}</td>
                          <td>{curElem.deaths}</td>
                          <td>{curElem.active}</td>
                          <td>{curElem.lastupdatedtime}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statewise;
