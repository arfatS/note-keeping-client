import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MyNotes from '../components/MyNotes'
import SharedNotes from '../components/SharedNotes'
import AddNote from '../components/AddNote'
import EditNote from '../components/EditNote'
import ViewNote from '../components/ViewNote'

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

class AppRoutes extends React.Component {
  
  render() {
    
    return (
      <div>
        <Switch>
  
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
  
          {
            localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') !== undefined ? 
  
            <>
              <Route exact path="/" component={MyNotes} />
              <Route exact path="/shared" component={SharedNotes} />
              <Route exact path="/add" component={AddNote} />
              <Route exact path="/edit/:id" component={EditNote} />
              <Route exact path="/view/:id" component={ViewNote} />
            </> :
  
            <>
              <Route exact path="/" component={Login} />
              <Route exact path="/shared" component={Login} />
              <Route exact path="/add" component={Login} />
              <Route exact path="/edit/:id" component={Login} />
              <Route exact path="/view/:id" component={ViewNote} />
            </>
          }
        </Switch>
      </div>
    )
  }
}

export default AppRoutes;