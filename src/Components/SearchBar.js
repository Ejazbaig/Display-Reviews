import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SearchBar(props) {
  return (
    <div className="searchBarDiv">
      <input
        type="text"
        className="inputBox"
        onChange={props.onProductIDChange}
        placeholder="Enter Product ID"
      ></input>
      <input
        type="text"
        className="inputBox"
        onChange={props.onViewerIDChange}
        placeholder="Enter Viewer ID"
      ></input>
      <br></br>
      <button className="button" onClick={props.onSearchClick}>
        Search Reviews
      </button>
      {props.loaded ? (
        <DropdownButton id="dropdown-item-button" title="Sort by">
          <div onClick={props.lowRating}>
            <Dropdown.Item as="button">Rating: Low to High</Dropdown.Item>
          </div>

          <Dropdown.Item as="button" onClick={props.highRating}>
            Rating: High to Low
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={props.lowConnection}>
            Reviwer Connection Level: Low to High
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={props.highConnection}>
            Reviwer Connection Level: High to Low
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={props.lowUse}>
            Usefullness: Low to High
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={props.highUse}>
            Usefullness: High to Low
          </Dropdown.Item>
        </DropdownButton>
      ) : null}
    </div>
  );
}

export default SearchBar;
