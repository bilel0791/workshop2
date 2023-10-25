import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Form , FormGroup ,Input, Button } from "reactstrap";
import { connect } from 'react-redux';
import { addMovie } from '../JS/actions/actions';
//mapDispatchToProps: it does something similar, but for actions. mapDispatchToProps connects Redux actions to React props.
// This way a connected React component will be able to send messages to the store.
//cours redux : exmple 5/6
const mapDispatchToProps = dispatch => {
    return {
        addMovie: movie =>dispatch(addMovie(movie))
    }
}

 const AddMovie=(props)=>{
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [rating,setRating]=useState('');
    const [posterURL,setPosterURL]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addMovie({
         
          title ,
          description ,
          rating,
           posterURL} );
       
    
    };
    return (
        <div>
<Form onSubmit={handleSubmit}>
  <FormGroup>
   
    <Input
      
      name="title"
      placeholder="title"
      type="text"
      onChange={e=>setTitle(e.target.value)}
      required
    />
  </FormGroup>
  <FormGroup>
  
    <Input
      
      name="description"
      placeholder="description "
      type="text"
      onChange={e=>setDescription(e.target.value)}
      required
    />
  </FormGroup>
  <FormGroup>
   
    <Input
      
      name="rating"
      type="number"
      placeholder="rating "
      onChange={e=>setRating(e.target.value)}
      required
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
   
    <Input
      
      name="posterURL"
      placeholder="posterURL"
      type="text"
      onChange={e=>setPosterURL(e.target.value)}
      required
    />
  </FormGroup>
  
  
  
  <Button  type="submit"  >
  Add
  </Button>
</Form>
        </div>
    )
 }
 AddMovie.propTypes={
   onAdd: PropTypes.func,
 }
 export default connect(null, mapDispatchToProps)(AddMovie);