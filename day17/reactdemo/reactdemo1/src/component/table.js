import React from 'react';
import './style.css';
import Form from './form';
import TableHeader from './tableheader';
import TableBody from './tablebody';
const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table className="tm">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }
  export default Table;