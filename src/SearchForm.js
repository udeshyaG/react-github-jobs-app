import React from "react";
import { Form, Col } from "react-bootstrap";

const SearchForm = ({ params, handleParamsChange }) => {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description 📃</Form.Label>

          <Form.Control
            value={params.description}
            name="description"
            onChange={handleParamsChange}
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Location 📌</Form.Label>

          <Form.Control
            value={params.location}
            name="location"
            onChange={handleParamsChange}
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={handleParamsChange}
            value={params.full_time}
            name="full_time"
            id="full_time"
            label="Only Full Time"
            type="checkbox"
            className="mb-2"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;
