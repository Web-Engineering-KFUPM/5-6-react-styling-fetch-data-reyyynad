import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}


export default SearchBar
