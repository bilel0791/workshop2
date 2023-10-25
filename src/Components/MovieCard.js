import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
const MovieCard=({movie:{id,title,rating,description,posterURL}})=>{
    return(
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
         {description}<br/>
         {rating}<br/>
         {id}
          </Card.Text>
         
        </Card.Body>
      </Card>
      </div>
    );
}
export default MovieCard;