import React from 'react'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'

const ListingsEntry = (props) => (
    <div>
    <Col xs={6} md={2}>
    <h4>{props.listing.name}</h4>
      <Thumbnail src={'./images/listings/' + props.listing.id + '/1.jpg'} alt="242x200">
        <h4>{props.listing.description}</h4>
        <p>tags: {props.listing.tags}</p>
        <p>
          <Button bsStyle="primary">Book</Button>&nbsp;
          <Button bsStyle="default">Save</Button>
        </p>
      </Thumbnail>
    </Col>
    </div>
  );

export default ListingsEntry
