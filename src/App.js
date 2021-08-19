import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Navbar from 'components/Navbar';
import Profile from 'pages/Profile';
import PrivateRoute from 'components/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './store/actions/auth.action'
import Logout from 'components/Logout';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const dis = async() => await dispatch(getUser());
    dis()
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/profile' exact component={Profile} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
