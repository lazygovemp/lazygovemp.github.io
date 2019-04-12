import React from "react";

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      redirectToReferrer: props.redirectToReferrer,
      isAuthenticated: props.isAuthenticated,
			username: "",
			password: ""
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}

	validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

	 handleChange = event => {
     this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
     if(this.validateForm())
     {
      this.props.loginFunc(); 
    }
    event.preventDefault();
  }

	render() {
		 return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange} />
          <input id="password" type="text" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
			
	}
}

export default LoginForm;