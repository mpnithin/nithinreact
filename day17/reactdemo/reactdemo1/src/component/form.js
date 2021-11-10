import React, {Component} from 'react'


class Form extends Component {
    initialState = {
    //   name: '',
    //   job: '',
    custname:'',
    city:'',
    phone:'',
    email:'',
    }
  
    state = this.initialState
    handleChange = (event) => {
      const {name, value} = event.target
    
      this.setState({
        [name]: value,
      })
    }
    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }
    // render() {
    //   const { name, job } = this.state;
      render() {
        const { custname, city,phone,email } = this.state;
    
    //   return (
    //     <form>
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         value={name}
    //         onChange={this.handleChange} />
    //       <label htmlFor="job">Job</label>
    //       <input
    //         type="text"
    //         name="job"
    //         id="job"
    //         value={job}
    //         onChange={this.handleChange} />
    //         <input type="button" value="Submit" onClick={this.submitForm} />
    //     </form>
    //   );

      
      return (
        <form>
            <table>
                <tr>
                    <td><label htmlFor="custname">Name</label></td>
                    <td><input
                    type="text"
                    name="custname"
                    id="custname"
                    value={custname}
                 onChange={this.handleChange} /></td>

                </tr>
          
          
         <tr>
             <td><label htmlFor="city">Job</label></td>
             <td><input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={this.handleChange} /></td>
         </tr>
          
          <tr>
              <td><label htmlFor="phone">phone</label></td>
              <td><input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.handleChange} /></td>
          </tr>
          
        <tr>
            <td> <label htmlFor="email">email</label></td>
            <td>
            <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange} />
            </td>
        </tr>
        <tr>
            <td><input type="button" value="Submit" onClick={this.submitForm} /></td>
            </tr> 
            </table>
        </form>
      );
    }
    
  }
  
  export default Form;
  