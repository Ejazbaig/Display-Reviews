const url = `http://www.i2ce.in/reviews/`;

export const onProductIDChange = (e) => {
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
export const onViewerIDChange = (e) => {
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

export const onShowMoreClick = () => {
  this.setState({
    showMore: !this.state.showMore,
  });
};

export const onSearchClick = () => {
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

export const lowRating = (e) => {
  this.setState({
    rating: "lowest",
    sortByRating: true,
    sortByConnectionLevel: false,
    sortByUsefullnesss: false,
    connectionLevel: "",
    usefullness: "",
    currentPage: 1,
  });
};

export const highRating = () => {
  this.setState({
    rating: "highest",
    sortByRating: true,
    sortByConnectionLevel: false,
    sortByUsefullnesss: false,
    connectionLevel: "",
    usefullness: "",
    currentPage: 1,
  });
};

export const lowConnection = () => {
  this.setState({
    connectionLevel: "lowest",
    sortByRating: false,
    sortByConnectionLevel: true,
    sortByUsefullnesss: false,
    rating: "",
    usefullness: "",
    currentPage: 1,
  });
};

export const highConnection = () => {
  this.setState({
    connectionLevel: "highest",
    sortByRating: false,
    sortByConnectionLevel: true,
    sortByUsefullnesss: false,
    rating: "",
    usefullness: "",
    currentPage: 1,
  });
};

export const lowUse = () => {
  this.setState({
    usefullness: "lowest",
    sortByRating: false,
    sortByConnectionLevel: false,
    sortByUsefullnesss: true,
    rating: "",
    connectionLevel: "",
    currentPage: 1,
  });
};

export const highUse = () => {
  this.setState({
    usefullness: "highest",
    sortByRating: false,
    sortByConnectionLevel: false,
    sortByUsefullnesss: true,
    rating: "",
    connectionLevel: "",
    currentPage: 1,
  });
};

export const onPageClick = (e) => {
  this.setState({
    currentPage: +e.target.id,
  });
};
