import React from 'react';
 import './style.css';
 import TableHeader from './tableheader';

import Form from './form';
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      // <tr key={index}>
      //   <td>{row.name}</td>
      //   <td>{row.job}</td>
      //   <td>
      //       <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
      //   </td>
      // </tr>
      <tr key={index}>
        <td>{row.custname}</td>
        <td>{row.city}</td>
        <td>{row.phone}</td>
        <td>{row.email}</td>
        <td>
            <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody className="bd">{rows}</tbody>
}

export default TableBody;