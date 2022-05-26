import { Button } from '@mui/material';
import axios from 'axios';
import { React, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import data from '../components/data';
import Rating from '../components/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);
  console.log(product);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
