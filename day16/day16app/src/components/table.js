import React from "react";
import './table.css';

function Tableheader()
{
    return(
        <thead className="t-head">
            <th>Name</th>
            <th>age</th>
        </thead>
        );
}


const Tablebody=()=>
{
    return(

        <tbody className="t-body">
            <tr>
                <td>nithin</td>
                <td>25</td>
            </tr>
            <tr>
                <td>sanoop</td>
                <td>26</td>
            </tr>
            <tr>
                <td>sonu</td>
                <td>27</td>
            </tr>

        </tbody>
        );
}

class Table extends React.Component{
    render()
    {
        return(
        
        <table className="table" >
        <caption>Fig(a): model</caption>
            <Tableheader/>
            <Tablebody/>
        </table>);
    }
}

export default Table;