import React from "react";
import "./search-box.styles.css";
export const Search = (props) => {
  const {handleChange, placeholder, type, ...other} = props;
  return (
    <input
      {...other}
      className="search"
      onChange={handleChange}
      type={ type || 'search'}
      placeholder={placeholder}
    />
  );
};

export default Search;
