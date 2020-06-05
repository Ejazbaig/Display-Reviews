import React from "react";
import StarRating from "./StarRating";
import Pagination from "react-bootstrap/Pagination";
import Loader from "./Loader";

function DisplayReviews(props) {
  let reviews = props.reviews;
  if (props.sortByRating) {
    if (props.rating === "lowest")
      reviews = reviews.sort((a, b) => a.ratings.Overall - b.ratings.Overall);
    if (props.rating === "highest")
      reviews = reviews.sort((a, b) => b.ratings.Overall - a.ratings.Overall);
  }

  if (props.sortByConnectionLevel) {
    if (props.connectionLevel === "lowest")
      reviews = reviews.sort(
        (a, b) => a.reviewer.connection_level - b.reviewer.connection_level
      );
    if (props.connectionLevel === "highest")
      reviews = reviews.sort(
        (a, b) => b.reviewer.connection_level - a.reviewer.connection_level
      );
  }

  if (props.sortByUsefullnesss) {
    if (props.usefullness === "lowest")
      reviews = reviews.sort((a, b) => a.usefulness - b.usefulness);
    if (props.usefullness === "highest")
      reviews = reviews.sort((a, b) => b.usefulness - a.usefulness);
  }

  let currentPage = props.currentPage;
  let items = [];
  for (let number = 1; number <= Math.ceil(reviews.length / 3); number++) {
    items.push(
      <Pagination.Item key={number} id={number} onClick={props.onPageClick}>
        {number}
      </Pagination.Item>
    );
  }
  reviews = reviews.slice((currentPage - 1) * 3, currentPage * 3);
  return (
    <div className="mainWrap">
      {props.loading ? (
        <Loader />
      ) : (
        reviews.map((item, index) => (
          <div className="itemWrapper" key={index}>
            <div className="textDiv">
              <strong>Title : </strong> {item.title}
            </div>
            <div className="textDiv">
              <strong>Comment : </strong>
              {item.comment}
            </div>
            <div className="textDiv">
              <strong>Usefullness : </strong>
              {item.usefulness}
            </div>
            <div>
              {item.friend ? (
                <div className="textDiv">
                  <strong>Name : </strong>
                  {item.reviewer.name}
                </div>
              ) : (
                <div className="textDiv">
                  <strong>Name : </strong> {"Not mentioned"}
                </div>
              )}
            </div>
            <div className="textDiv">
              <strong>Overall Rating : </strong>
              <StarRating rating={item.ratings.Overall} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Delivery Time Rating : </strong>{" "}
              <StarRating rating={item.ratings.delivery_time} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Discounts and Offers Rating : </strong>{" "}
              <StarRating rating={item.ratings.discounts_and_offers} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Matches Description Rating : </strong>{" "}
              <StarRating rating={item.ratings.matches_description} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Matches Photo Rating : </strong>{" "}
              <StarRating rating={item.ratings.matches_photo} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Packaging Rating : </strong>{" "}
              <StarRating rating={item.ratings.packaging} />
            </div>
            <div className={props.showMore ? "textDiv" : "hide"}>
              <strong>Price Rating : </strong>{" "}
              <StarRating rating={item.ratings.price} />
            </div>

            <div className="buttonDiv">
              <button className="button" onClick={props.onShowMoreClick}>
                {props.showMore ? "show less" : "show more"}
              </button>
            </div>
          </div>
        ))
      )}
      <div className="paginationDiv">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
}

export default DisplayReviews;
