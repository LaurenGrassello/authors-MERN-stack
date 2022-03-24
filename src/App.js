// import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Create from './views/Create';
import Dashboard from './views/Dashboard';
import EditAuthor from './views/EditAuthor';
import './App.css';
import React from 'react';

function App() {
const [refresh, setRefresh] = useState(true)

const refreshList = () => {
  setRefresh(!refresh)
}

  return (
    <BrowserRouter>
    <div className='container mt-3'>
    <h2>Favorite Authors</h2>
    <Switch>

    <Route exact path='/'>
    <Dashboard />
    </Route>

    <Route exact path='/author/:id/edit'>
    <EditAuthor refreshList={refreshList} />
    </Route>

    <Route exact path='/new'>
    <Create refreshList={refreshList}/>
    </Route>

    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
