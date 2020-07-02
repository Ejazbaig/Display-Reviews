import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import DisplayReviews from "./Components/DisplayReviews";

const url = `http://www.i2ce.in/reviews/`;

class App extends Component {
  state = {
    productID: null,
    viewerID: null,
    reviews: [],
    showMore: false,
    currentPage: 1,
    loading: false,
    loaded: false,
    rating: "",
    connectionLevel: "",
    usefullness: "",
    sortByRating: false,
    sortByConnectionLevel: false,
    sortByUsefullnesss: false,
  };

  onProductIDChange = (e) => {
    if (e.target.value === "") {
      this.setState({
        productID: null,
        reviews: [],
      });
    } else {
      this.setState({
        productID: +e.target.value,
      });
    }
  };

  onViewerIDChange = (e) => {
    if (e.target.value === "") {
      this.setState({
        viewerID: null,
      });
    } else {
      this.setState({
        viewerID: +e.target.value,
      });
    }
  };

  onShowMoreClick = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  onSearchClick = () => {
    console.log(this.state.reviews);
    if (1 <= this.productID <= 20) {
      this.setState({ loading: true }, () => {
        let fetchedData;
        if (+this.state.viewerID !== 0) {
          fetchedData = fetch(
            url + this.state.productID + `/` + this.state.viewerID
          );
        } else {
          fetchedData = fetch(url + this.state.productID);
        }
        fetchedData
          .then((res) => res.json())
          .then((res) => {
            res = Object.entries(res);
            this.setState({
              reviews: res[1][1],
              loading: false,
              loaded: true,
              showMore: false,
            });
          });
      });
    }
  };

  lowRating = (e) => {
    this.setState({
      rating: "lowest",
      sortByRating: true,
      sortByConnectionLevel: false,
      sortByUsefullnesss: false,
      connectionLevel: "",
      usefullness: "",
    });
  };
  highRating = () => {
    this.setState({
      rating: "highest",
      sortByRating: true,
      sortByConnectionLevel: false,
      sortByUsefullnesss: false,
      connectionLevel: "",
      usefullness: "",
    });
  };
  lowConnection = () => {
    this.setState({
      connectionLevel: "lowest",
      sortByRating: false,
      sortByConnectionLevel: true,
      sortByUsefullnesss: false,
      rating: "",
      usefullness: "",
    });
  };
  highConnection = () => {
    this.setState({
      connectionLevel: "highest",
      sortByRating: false,
      sortByConnectionLevel: true,
      sortByUsefullnesss: false,
      rating: "",
      usefullness: "",
    });
  };
  lowUse = () => {
    this.setState({
      usefullness: "lowest",
      sortByRating: false,
      sortByConnectionLevel: false,
      sortByUsefullnesss: true,
      rating: "",
      connectionLevel: "",
    });
  };
  highUse = () => {
    this.setState({
      usefullness: "highest",
      sortByRating: false,
      sortByConnectionLevel: false,
      sortByUsefullnesss: true,
      rating: "",
      connectionLevel: "",
    });
  };

  onPageClick = (e) => {
    this.setState({
      currentPage: +e.target.id,
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Review Displayer</h2>
        <SearchBar
          onProductIDChange={this.onProductIDChange}
          onViewerIDChange={this.onViewerIDChange}
          onSearchClick={this.onSearchClick}
          loaded={this.state.loaded}
          lowRating={this.lowRating}
          highRating={this.highRating}
          lowConnection={this.lowConnection}
          highConnection={this.highConnection}
          lowUse={this.lowUse}
          highUse={this.highUse}
        />
        <DisplayReviews
          productID={this.state.productID}
          viewerID={this.state.viewerID}
          reviews={this.state.reviews}
          onShowMoreClick={this.onShowMoreClick}
          showMore={this.state.showMore}
          onPageClick={this.onPageClick}
          currentPage={this.state.currentPage}
          loading={this.state.loading}
          rating={this.state.rating}
          connectionLevel={this.state.connectionLevel}
          usefullness={this.state.usefullness}
          sortByRating={this.state.sortByRating}
          sortByConnectionLevel={this.state.sortByConnectionLevel}
          sortByUsefullnesss={this.state.sortByUsefullnesss}
        />
      </div>
    );
  }
}

export default App;
