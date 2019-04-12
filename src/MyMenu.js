import React from "react";
import MyDataTable from "./MyDataTable.js";
import orgList from "./orgList.json";
import orgHeaders from "./orgHeaders.json";
import LoginForm from "./LoginForm.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        displayedPage : "",
        showMenu : false,
    };
  }

 

  render() {
    let { } = this.props;
    if(this.state.showMenu===false){
        return (
            <div onClick={()=>this.setState({...this.state, showMenu:true})}>Menu</div>
        );
    }else{

    return ( 
        <Router>
            <div>
            <div onClick={()=>this.setState({...this.state, showMenu:false})}>Menu</div>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                </ul>
                <hr />

                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
             </div>
        </Router>
    );
}
  }
}

   function Login(){
        return(
        <div>

        <LoginForm/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    );
}

function Home(){
  return (
  <div></div>
      // <div>
       
      //   <MyDataTable
      //     data={orgList}
      //     columnNames={orgHeaders}
      //     url="https://lxm1n21klq.sse.codesandbox.io/orgs"
      //   />

      // </div>
    );
}


export default MyMenu;