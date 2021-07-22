import React, { useEffect, useState } from "react";
import "../Weather/weather.css";
const Weatherapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("melbourn");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ff25f5f8ca489452645adae1952a7ac`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="box">
              <div className="inputData">
                <input
                  type="search"
                  className="utField"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
              {!city ? (
                <p className="errorMsg"> No Data Found</p>
              ) : (
                <div>
                  <div className="info">
                    <h1 className="location">
                      <i className="fas fa-street-view"></i>
                      {search}
                    </h1>
                    <h1 className="temp">{city.temp}℃ </h1>
                    <h3 className="tempmin_max">
                      Min:{city.temp_min}℃ | Max: {city.temp_max}℃
                    </h3>
                  </div>
                  <div className="wave-one"></div>
                  <div className="wave-two"></div>
                  <div className="wave-three"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weatherapp;
