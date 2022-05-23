import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from './Rating';

export default function Prodcard(props) {
  const {product} = props
  return (
    <Card sx={{ maxWidth: 345, marginBottom: `1rem` }}>
      <a href='link'>
      <CardMedia
        component="img"
        height="400"
        image="/static/images/cards/contemplative-reptile.jpg"
        href=""
      /></a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span style={{fontWeight:600, color: `black`}}>Discription: </span> {product.description}
        </Typography>
        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent: `space-between`, marginTop: -3}}>
        <Typography sx={{size:`small`, color:`#f0c040;`, marginLeft:1.3}}>₹ {product.price}</Typography>
        <Button variant="contained" size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}