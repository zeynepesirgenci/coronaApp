import React, { useState, useEffect } from "react";
import { Form, Select } from "antd";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fethcedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchCountry();
  }, [fethcedCountries]);

  return (
    <Form.Item className={styles.formControl}>
      <Select onChange={(e) => handleCountryChange(e)}>
        <Select.Option value="global">Global</Select.Option>
        {fethcedCountries.map((country, i) => (
          <Select.Option key={i} value={country}>
            {country}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
    //the state of the choosen component will be kept in the parent component App.js.
  );
};

export default CountryPicker;
