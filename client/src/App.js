import React,{useState, useEffect} from 'react'
import { Route ,Switch } from "react-router-dom";
import UpdateForm from './Components/UpdateForm';
import Container from './Components/Container';
import ViewUser from './Components/ViewUser';
function App() {

  return (
    
    <>
    <Switch>      
      <Route exact path="/update/:id">
        <UpdateForm/>
      </Route>
      <Route exact path="/view/:id">
        <ViewUser/>
      </Route>
      <Route exact path="/">
        <Container/>
      </Route>
    </Switch>
  
    </>
  );
}

export default App;
