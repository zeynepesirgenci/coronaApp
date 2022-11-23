import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

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
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fethcedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option> //the state of the choosen component will be kept in the parent component App.js.
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
