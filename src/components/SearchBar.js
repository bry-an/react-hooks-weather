import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
  return (
    <Form inline onSubmit={handleFormSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="searchTerm" hidden>
          Search by Location
        </Label>
        <Input
          onChange={handleInputChange}
          value={searchTerm}
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Address or Zip"
        />
      </FormGroup>
      <Button onClick={handleFormSubmit}>Submit</Button>
    </Form>
  );
};

export default SearchBar;
