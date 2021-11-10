import React from 'react';
import './style.css';
import Form from './form';
const TableHeader = () => {
    return (
      <thead className="th" > 
        <tr>
          <th>CUSTNAME</th>
          <th>CITY</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>REMOVE</th>
        </tr>
      </thead>
    )
  }
  export default TableHeader;