import React from 'react';
import './mytable.css';

const TableHeader = () => {
    return (
      <thead className="bd" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table className="cl">
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Krish',
          job: 'Software Engineer',
        },
        {
          name: 'Minna',
          job: 'Artist',
        },
        {
          name: 'Deepa',
          job: 'HR',
        },
        {
          name: 'Ameer',
          job: 'Manager',
        },
        {
          name: 'Vijay',
          job: 'Analyst',
        },
        {
          name: 'Chandu',
          job: 'System Engineer',
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;