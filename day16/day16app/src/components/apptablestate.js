import React from 'react';
import './mytable.css';
import Form from './form';
const TableHeader = () => {
    return (
      <thead className="c1" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
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
          <td>
              <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody className="bd">{rows}</tbody>
  }


  const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }
  class StateData extends React.Component {
      state={
          characters:[],
      }
      removeCharacter = (index) => {
        const {characters} = this.state
      /*filter does not mutate but rather creates a new array,
       and is a preferred method for modifying arrays in JavaScript. */
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
      }
    render() {
      const {characters} =this.state
      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
  }

  export default StateData;
