import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Prodcard(props) {
  const { product } = props;
  return (
    <Card sx={{ maxWidth: 345, marginBottom: `1rem` }}>
      <Link to={`/product/${product._id}`}>
        <CardMedia component="img" height="400" image={product.image} />
      </Link>
      <CardContent>
        <Link
          style={{ color: `black`, textDecoration: `none` }}
          to={`/product/${product._id}`}
        >
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="success">
          <span style={{ fontWeight: 600, color: `black` }}>Discription: </span>{' '}
          {product.description}
        </Typography>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: `space-between`, marginTop: -3 }}
      >
        <Typography sx={{ size: `medium`, color: `black`, marginLeft: 1.3 }}>
          ₹ {product.price}
        </Typography>
        <Button variant="contained" size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
