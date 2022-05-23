import { Button } from "@mui/material";
import { React } from "react";
import data from "../components/data";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const product = data.prods.find((el) => el._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className="row">
      <div className="col-2">
        <img className="large" src={product.image} alt={product.name}></img>
      </div>
      <div className="col-1">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li>
          <li>Price: ₹{product.price}</li>
          <li>
            Description
            <p>{product.description}</p>
          </li>
        </ul>
      </div>
      <div className="col-1">
        <div className="third-section">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">₹{product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div className="price">
                  {product.countInStock > 0 ? (
                    <span style={{ color: `green` }}>In stock</span>
                  ) : (
                    <span style={{ color: `red` }}>Unavailable</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <Button variant="contained" size="small">
                Add to cart
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
