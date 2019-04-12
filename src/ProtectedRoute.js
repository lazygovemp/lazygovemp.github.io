import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import LoginForm from './LoginForm.js'
import MyDataTable from "./MyDataTable.js";
import orgList from "./orgList.json";
import orgHeaders from "./orgHeaders.json";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Landing = () => <h3>Welcome to Organization Management</h3>
const Protected = () => <h3>Protected</h3>

const Home = () =>  <MyDataTable
          data={orgList}
          columnNames={orgHeaders}
          url="https://lxm1n21klq.sse.codesandbox.io/orgs"
        />


class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }


  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {

      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <LoginForm loginFunc={this.login}/>
      </div>
    )
  }
}



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default function AuthExample () {
  return (
    <Router>
      <div>
        <AuthButton/>
        <ul>
          <li><Link to="/landing">Landing Page</Link></li>
          <li><Link to="/home">Home Page</Link></li>
        </ul>
        <Route path="/landing" component={Landing}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/Home' component={Home} />
      </div>
    </Router>
  )
}